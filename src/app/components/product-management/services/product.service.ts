import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { ProductManagementModule } from '../product-management.module';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: ProductManagementModule
})
export class ProductService {
  products = [];

  constructor(private httpClient: HttpClient) { }

  addProduct(product: Product) {
    const newid = this.products.sort((a, b) => b.id - a.id)[0] + 1;
    product.id = newid;
    this.products.push(product);
  }
  
  getProducts(): Observable<Product[]> {
    if (this.products.length > 0) {
      return of(this.products);
    }
    const p1 = new Product();
    p1.id = 1;
    p1.name = 'Laptop';
    p1.brand = 'Lenovo';
    this.products.push(p1);

    const p2 = new Product();
    p2.id = 2;
    p2.name = 'Laptop';
    p2.name = 'Laptop';
    p2.brand = 'Dell';
    p2.likeCount = 1;
    this.products.push(p2);

    return of(this.products);
  }
  getProduct(id: number): Observable<Product> {
    if (this.products) {
      return of(this.products.find(f => f.id === id));
    } else {
      return of(null);
    }
  }
}
