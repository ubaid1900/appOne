import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { ProductManagementModule } from './components/product-management/product-management.module';
// import { ProductsComponent } from './components/productManagement/products/products.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      // { path: 'products', component: ProductsComponent }]),
      // { path: 'products', loadChildren:'./components/product-management/product-management.module#ProductManagementModule' }]),
      { path: 'products', loadChildren: () => import('./components/product-management/product-management.module').then(m=> m.ProductManagementModule)}]),
    BrowserModule,
    FormsModule
    // ,
    // ProductManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
