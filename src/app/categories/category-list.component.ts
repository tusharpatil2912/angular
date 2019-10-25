import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { CategoryModel } from '../shared/category-model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private service: CategoriesService) { }

  categoriesList: CategoryModel[];

  ngOnInit() {
    this.service.getAllCategories().subscribe(
      data=>this.categoriesList=data
    );
  }

}
