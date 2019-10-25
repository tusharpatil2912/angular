import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryHomeComponent } from './category-home.component';
import { CategoryListComponent } from './category-list.component';
import { CategoryDetailsComponent } from './category-details.component';
import { CategoryCreateComponent } from './category-create.component';
import { CategoryUpdateComponent } from './category-update.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes=[
  {path:'categories',
children:[
  {path:'list',component:CategoryListComponent},
  {path:'details/:id',component:CategoryDetailsComponent},
  {path:'create',component:CategoryCreateComponent},
  {path:'edit/:id',component:CategoryUpdateComponent},
  {path:'',component:CategoryHomeComponent}
]}
];


@NgModule({
  declarations: [CategoryHomeComponent, CategoryListComponent, CategoryDetailsComponent, CategoryCreateComponent, CategoryUpdateComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CategoriesModule { }
