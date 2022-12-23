import { ProductInterface } from './../../../shared-service/productInterface/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from 'src/app/shared-service/product-api/product-api.service';
import {ToastrService } from 'ngx-toastr';
import { TimeScale } from 'chart.js';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  public imageIndex = "ProductImageUrl"
  public url = 'http://localhost:8686/'
  public getProductsId: any;
  public getAllDataWithOwnId: object | ProductInterface | any = {}
  public getAllDatafromProductService: any
  public selectedSizes: any =[];
  public totalQuantity :Number|any ;
  public selctedQuantity :Number|any =0;
  public offCanvasRight = '';
  public alert : boolean = false

  constructor(private ActivatedRoute: ActivatedRoute,
    private readonly getAllProductFrombackend: ProductApiService,
    private readonly Router:Router,
    private readonly toaster:ToastrService
    ) { }

  ngOnInit(): void {
    this.callingMyActivatedRoute()
    this.getProductService()
    // this.getAllProduct()
  }

  public callingMyActivatedRoute() {
    this.getProductsId = this.ActivatedRoute.snapshot.params['Id']
    console.log(this.getProductsId);
  }

  public getProductService() {
    this.getAllProductFrombackend.getProductWithId(this.getProductsId).subscribe((response: any) => {
      this.getAllDataWithOwnId = response.Result
      this.totalQuantity = this.getAllDataWithOwnId.quantity
    })
  }
  // public getAllProduct() {
  //   this.getAllProductFrombackend.getProduct().subscribe((response: any) => {
  //     this.getAllDatafromProductService = response.Result
  //   })
  // }

  public reDirectSingleProductPage(_id: any) {
    this.Router.navigate(['View-Product',_id]);
  }

  public getSizes(event:any) {
    if (event.target.checked) {
      this.selectedSizes.push(event.target.value);
    }
    else {
      this.selectedSizes = this.selectedSizes.filter((value: any) => value != event.target.value);
    }
    console.log(this.selectedSizes);
    
  }

  public decreaseQuantity(){
    if(this.selctedQuantity > 0){
        this.selctedQuantity --
    }
      
  }
  public increaseQuantity(){
     if(this.selctedQuantity < this.totalQuantity){
        this.selctedQuantity++
     }
  }
  public AddToCart(){
    if(this.selectedSizes.length <= 0){
       this.toaster.error("Please Select Size First")
       this.alert=true
    }
    else if(this.selctedQuantity <= 0){
      this.toaster.error("Please Add Quantity First")
      this.alert=false
    }
    else{
      this.offCanvasRight = 'offcanvas'
      this.alert=false
    }
  }


}
