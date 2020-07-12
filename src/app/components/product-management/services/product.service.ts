import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [];

  constructor(private httpClient: HttpClient) { }

  getProducts(): Product[] {
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

    return this.products;
  }
  getProduct(id: number): Product {
    if (this.products) {
      return this.products.find(f=> f.id === id);
    } else {
      return null;
    }
  }
}
