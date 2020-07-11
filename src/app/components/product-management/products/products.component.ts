import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor() { }

  ngOnInit(): void {
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

    this.products = this.products.sort((a, b) => b.likeCount - a.likeCount);
  }
  handleLikeCountChanged() {
    this.products = this.products.sort((a, b) => b.likeCount - a.likeCount);  
  }

}


