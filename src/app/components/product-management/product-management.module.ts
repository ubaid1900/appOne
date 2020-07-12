import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';



@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{path: '', component: ProductsComponent},
    {path: 'products', component: ProductsComponent}])
  ],
  providers: [ProductService],
  exports: [ProductsComponent]
})
export class ProductManagementModule { }
