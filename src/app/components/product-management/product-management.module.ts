import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ProductsComponent},
    {path: 'products', component: ProductsComponent}])
  ],
  providers: [],
  exports: [ProductsComponent]
})
export class ProductManagementModule { }
