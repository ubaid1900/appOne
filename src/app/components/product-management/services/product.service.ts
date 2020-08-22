import { Injectable } from '@angular/core';
import { Product, Brand } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { ProductManagementModule } from '../product-management.module';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: ProductManagementModule
})
export class ProductService {
  products = [];
  brands = [];

  constructor(private httpClient: HttpClient) { }

  addProduct(product: Product) {
    const newid = this.products.sort((a, b) => b.id - a.id)[0] + 1;
    product.id = newid;
    this.products.push(product);
  }
  updateProduct(product: Product): string {
    let p: Product = this.products.find(f => f.id === product.id);
    p.brand = product.brand;
    p.name = product.name;
    p.fragile = product.fragile;

    return "Updated.";
  }

  getProducts(): Observable<Product[]> {
    if (this.products.length > 0) {
      return of(this.products);
    }
    let brands = [];
    this.getBrands().subscribe(data => brands = data, err => console.error(err), () => { });
    const p1 = new Product();
    p1.id = 1;
    p1.name = 'Laptop1';
    p1.brand = brands.find(b => b.name === 'Lenovo');
    this.products.push(p1);

    const p2 = new Product();
    p2.id = 2;
    p2.name = 'Laptop2';
    p2.brand = brands.find(b => b.name === 'Dell');
    p2.likeCount = 1;
    this.products.push(p2);

    return of(this.products);
  }
  getProduct(id: number): Observable<Product> {
    this.getProducts().subscribe();
    if (this.products) {
      return of(this.products.find(f => f.id === id));
    } else {
      return of(null);
    }
  }

  getBrands(): Observable<Brand[]> {
    if (this.brands.length > 0) {
      return of(this.brands);
    }
    const p1 = new Brand();
    p1.id = 1;
    p1.name = 'Lenovo';
    this.brands.push(p1);

    const p2 = new Brand();
    p2.id = 2;
    p2.name = 'Dell';
    this.brands.push(p2);

    const p3 = new Brand();
    p3.id = 3;
    p3.name = 'Apple';
    this.brands.push(p3);

    return of(this.brands);
  }
}
