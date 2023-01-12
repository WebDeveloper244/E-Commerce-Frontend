import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(
    private readonly http: HttpClient
  ) { }
  createProductCart(payLoad: any) {
    return this.http.post('http://localhost:8686/ProductManagement/ProductData', payLoad)
  }
  getProduct() {
    return this.http.get("http://localhost:8686/ProductManagement/GetProductData")
  }
  getProductWithId(id: any) {
    return this.http.get(`http://localhost:8686/ProductManagement/getDocumentById/${id}`)  // 1st step create first slug and second slug then go to server.js commit section 👍👍👍 // after creating this slug getDocumentById/ then give id from here
  }
  deleteProductWithId(id: any) {           //soft delete
    return this.http.delete(`http://localhost:8686/ProductManagement/DeleteProductById/${id}`)
  }
  hardDeleteProductById(_id: any) {
    return this.http.delete(`http://localhost:8686/ProductManagement/hardDeleteProductById/${_id}`)
  }
  upDateProductById(payLoad: any) {
    return this.http.post(`http://localhost:8686/ProductManagement/updateProductById/`, payLoad)
  }
  sendEmail(payLoad: any) {
    return this.http.post('http://localhost:8686/emailService/sendEmailAgent', payLoad)
  }
}
