import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product;
  message: string;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.product = { id: 0, name: '', brand: '', likeCount: 0 };
  }
  submitTheForm() {
    this.productService.addProduct(this.product);
    this.message = "The product was added.";
  }
}
