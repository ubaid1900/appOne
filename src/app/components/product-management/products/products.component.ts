import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Title } from '@angular/platform-browser';
import { ProductService } from '../services/product.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  products$: Observable<Product[]>;
  productSubscription: Subscription;

  message: string;

  constructor(private titleService: Title, private productService: ProductService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Products');
    this.products$ = this.productService.getProducts();
    this.productSubscription = this.products$.subscribe((data) => { this.products = data; }
      , (err) => console.error(err), () => { });
    this.products = this.products.sort((a, b) => b.likeCount - a.likeCount);
  }
  handleLikeCountChanged() {
    this.products = this.products.sort((a, b) => b.likeCount - a.likeCount);
  }
  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

  addDefaultProduct() {
    const product = new Product();
    product.name = "Fourth";
    product.brand = "Dell";
    this.productService.addProduct(product);
    this.message = "The product was added.";
  }
}


