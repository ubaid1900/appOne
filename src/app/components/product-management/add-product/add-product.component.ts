import { Component, OnInit } from '@angular/core';
import { Product, Brand } from 'src/app/models/product';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product;
  message: string;
  brands$: Observable<Brand[]>;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.product = { id: 0, name: '', brand: null, likeCount: 0 };
    this.product = new Product();
    console.log(this.product.fragile);
    this.brands$ = this.productService.getBrands();
  }
  submitTheForm() {
    this.productService.addProduct(this.product);
    this.message = "The product was added.";
  }
}
