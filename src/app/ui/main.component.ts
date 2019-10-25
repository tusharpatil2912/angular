import { Component, OnInit, OnChanges, OnDestroy, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit, SimpleChanges } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../shared/product-model';
import { CategoryModel } from '../shared/category-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges,OnDestroy,
AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit {

  appTitle = "New title";
      
  constructor(
    private catService: CategoriesService,
    private prodService: ProductService
  ) { }

  productList:ProductModel[];
  categoryList:CategoryModel[];

  changeData() {
    this.appTitle = Date.now().toString();
  }
  
  ngOnInit() {
    this.catService.getAllCategories().subscribe(data=>this.categoryList=data);
    console.log("ng on init called.");
  }

  changeCategory(categoryId){
    console.log(categoryId);
    this.productList=null;
    if(categoryId>0){
      this.prodService.getProductsByCategory(categoryId).subscribe(data=>this.productList=data);
    }
  }


  ngDoCheck(){
    console.log("do check called.");
  }
  
  ngOnChanges(changes:SimpleChanges){
    console.log("ngChanges called.");
  }
  
  ngOnDestroy() {
    console.log("Destroy called.");
  }
  
  ngAfterContentChecked(){
    console.log("after content is checked");
  }
  
  ngAfterContentInit() {
    console.log("after content is initialized");
  }
  ngAfterViewChecked() {
    console.log("after view is checked");
  }
  
  ngAfterViewInit() {
    console.log("after view is initialized");
  }
}