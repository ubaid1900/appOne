import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  // id: number;
  // product$: Observable<Product>;
  product: Product;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // this.product$ = this.productService.getProduct(this.id);

    this.product = this.route.snapshot.data['retrievedProduct'];
  }

}
