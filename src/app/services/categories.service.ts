import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryModel } from '../shared/category-model';
import { environment as Env} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http:HttpClient
  ) { }

  getAllCategories(){
    return this.http.get<CategoryModel[]>(Env.categoriesUrl);
  }
  getCategoryDetails(id){
    return this.http.get<CategoryModel>(`${Env.categoriesUrl}/${id}`);
  }
  
}
