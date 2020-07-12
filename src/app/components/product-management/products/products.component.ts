import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Title } from '@angular/platform-browser';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private titleService: Title, private productService: ProductService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Products');
    this.products = this.productService.getProducts();
    this.products = this.products.sort((a, b) => b.likeCount - a.likeCount);
  }
  handleLikeCountChanged() {
    this.products = this.products.sort((a, b) => b.likeCount - a.likeCount);  
  }

}


