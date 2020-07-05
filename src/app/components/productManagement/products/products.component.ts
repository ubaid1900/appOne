import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    { id: 1, productName: 'Laptop', brand: 'Lenovo' },
    { id: 2, productName: 'Laptop', brand: 'Dell' }];

  
  constructor() { }

  ngOnInit(): void {
  }

}
