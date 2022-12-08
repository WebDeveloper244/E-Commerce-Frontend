import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductApiService } from 'src/app/shared-service/product-api/product-api.service';

@Component({
  selector: 'app-product-analytics',
  templateUrl: './product-analytics.component.html',
  styleUrls: ['./product-analytics.component.css']
})
export class ProductAnalyticsComponent implements OnInit {
  
  
  Url = 'http://localhost:8686/'
  dataComefromProductService:any=[];
  getIdProduct:any={} // by default its empty object  and "?" in html  file is if data exisit then show otherwise error not show (design pattern) 
  UpDateMyProductForm:any | FormGroup
  makeMyIdPublic:any;
  viewToggle:boolean=false
  imageDetails:any
  
  
  constructor(
    private getProductService:ProductApiService,
    private toasterService:ToastrService,
    private formBuilder:FormBuilder

  ) {
    
   }

  ngOnInit(): void {
    this.allProducts()
    this.UpDateMyProductFormModel()
  }
// ******************************************************************************************************** Product-Form-Model ****************************************//
  UpDateMyProductFormModel(){
this.UpDateMyProductForm = this.formBuilder.group({
  productName: new FormControl ('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),  // first we create empty formControll
  quantity: new FormControl ('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
  price: new FormControl ('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
  description: new FormControl ('', Validators.required),
  color: new FormControl ('',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]),
  companyName: new FormControl ('',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]),
  category:new FormControl ('', Validators.required),
  // size: new FormArray([]),
})
  }

  // ************************* Get all Product ******************************//
  allProducts(){
     this.getProductService.getProduct().subscribe((res:any)=>{
       res.Result.forEach((element:any) => {
        if(element.softDelete !== 1){
          this.dataComefromProductService.push(element);
        }
      });
    })
  }
    // ************************* Get ID Product ******************************//

getIdData(_id:any){
  this.makeMyIdPublic = _id;
  this.getProductService.getProductWithId(_id).subscribe((res:any)=>{        // Now we get data with this method getById
this.getIdProduct = res.Result

this.UpDateMyProductForm = this.formBuilder.group({
  productName: new FormControl (this.getIdProduct?.productName, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),  // first we create empty formControll
  quantity: new FormControl (this.getIdProduct?.quantity, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
  price: new FormControl (this.getIdProduct?.price, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
  description: new FormControl (this.getIdProduct?.description, Validators.required),
  color: new FormControl (this.getIdProduct?.color,[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]),
  companyName: new FormControl (this.getIdProduct?.companyName,[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]),
  category:new FormControl (this.getIdProduct?.category, Validators.required),
  })
  
})
}
// ************************* Delete Product by ID ******************************//

softDeleteProduct(_id:any){
  this.getProductService.deleteProductWithId(_id).subscribe((res:any)=>{
       this.toasterService.error(res.Message)
       this.dataComefromProductService=[]
       this.allProducts()

  })
}
// ************************* Delete Product by ID ******************************//
hardDeleteProduct(_id:any){
this.getProductService.hardDeleteProductById(_id).subscribe((response:any)=>{
  this.toasterService.error(response.Message)
  this.dataComefromProductService=[]
  this.allProducts()
})
}
// ************************* Submit Update Product Form *****************************//

updateProductForm(){
 let payLoad = this.UpDateMyProductForm.value
 payLoad['_id'] = this.makeMyIdPublic;
 this.getProductService.upDateProductById(payLoad).subscribe((req:any)=>{
  this.toasterService.info(req.Message)
  this.getIdData(this.makeMyIdPublic)
 })
}

changeView(){
  this.viewToggle = !this.viewToggle
}

// ************************* Get Image through change Method ****************************//
getImage(event:any){
this.imageDetails = event.target.files[0]
}
// ************************* Now Update Image through Click Method ****************************//
updateImage(productId:any, oldImageDetails:any){
const PayLoad = {oldProductId:productId , oldImageDetails:oldImageDetails, newImageDetails:this.imageDetails }
console.log(PayLoad)
}
}
