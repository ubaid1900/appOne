import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductsComponent, ProductComponent, AddProductComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: ProductsComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'add', component: AddProductComponent}
  ])
  ],
  providers: [ProductService],
  exports: [ProductsComponent]
})
export class ProductManagementModule { }
