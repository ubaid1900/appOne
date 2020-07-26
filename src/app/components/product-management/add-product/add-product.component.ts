import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product;
  constructor() { }

  ngOnInit(): void {
    this.product = { id: 0, name: '', brand: '', likeCount: 0 };
  }

}
