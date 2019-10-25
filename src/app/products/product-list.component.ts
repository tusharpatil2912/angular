import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../shared/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private service: ProductService) { }

  productList: ProductModel[];

  ngOnInit() {
    this.service.getAllProducts().subscribe(
      data=>this.productList=data
    );
  }

}
