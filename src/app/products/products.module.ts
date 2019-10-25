import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductListComponent } from './product-list.component';
import { ProductCreateComponent } from './product-create.component';
import { ProductUpdateComponent } from './product-update.component';
import { RouterModule,Routes } from "@angular/router";

const routes: Routes=[
  {path:'products',
children:[
  {path:'list', component:ProductListComponent},
  {path:'details/:id',component:ProductDetailsComponent},
  {path:'create', component:ProductCreateComponent},
  {path:'edit/:id',component:ProductUpdateComponent},
  {path:'',component:ProductHomeComponent}
]}
];

@NgModule({
  declarations: [ProductHomeComponent, ProductDetailsComponent, ProductListComponent, ProductCreateComponent, ProductUpdateComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ProductsModule { }
