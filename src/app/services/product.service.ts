import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../shared/product-model';
import { environment as Env} from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http:HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<ProductModel[]>(Env.productsUrl);
  }
  getProductDetails(id){
    return this.http.get<ProductModel>(`${Env.productsUrl}/${id}`);
  }
  getProductsByCategory(categoryId){
    var url= `${Env.productsUrl}/?categoryId=${categoryId}`;
    return this.http.get<ProductModel[]>(url);
  }
}
