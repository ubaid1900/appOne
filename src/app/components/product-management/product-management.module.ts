import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../productManagement/products/products.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ProductsComponent},
    {path: 'products', component: ProductsComponent}])
  ],
  exports: [ProductsComponent]
})
export class ProductManagementModule { }
