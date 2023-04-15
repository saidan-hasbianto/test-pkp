import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './modules/product/product-list/product-list.component';
import { ProductDetailComponent } from './modules/product/product-detail/product-detail.component';

const routes: Routes = [
  {
    path:'product-list', component:ProductListComponent
  },
  {
    path:'product-detail/:id', component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }