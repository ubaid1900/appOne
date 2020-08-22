import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AuthenticationGuard } from 'src/app/shared/auth.guard';
import { AuthorizationGuardGuard } from 'src/app/shared/authorization-guard.guard';
import { CanDeactivateGuard } from 'src/app/shared/can-deactivate.guard';
import { GetProductResolver } from './GetProductResolver';



@NgModule({
  declarations: [ProductsComponent, ProductComponent, AddProductComponent, EditProductComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: ProductsComponent },
    { path: 'products', component: ProductsComponent },
    {
      path: 'add', component: AddProductComponent
      , canActivate: [AuthenticationGuard, AuthorizationGuardGuard], canDeactivate: [CanDeactivateGuard]
    },
    {
      path: 'edit/:id', component: EditProductComponent
      , canActivate: [AuthenticationGuard, AuthorizationGuardGuard], canDeactivate: [CanDeactivateGuard],
      resolve: { retrievedProduct: GetProductResolver}
    },
    ])
  ],
  providers: [GetProductResolver],
  exports: [ProductsComponent]
})
export class ProductManagementModule { }

