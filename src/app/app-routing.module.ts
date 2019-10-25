import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './ui/main.component';
import { ProductHomeComponent } from './products/product-home.component';
import { PageNotFoundComponent } from './ui/page-not-found.component';


const routes: Routes = [
  {path:'home',component: MainComponent},
  //{path:'/products',component: ProductHomeComponent},
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
