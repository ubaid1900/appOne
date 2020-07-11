import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output('likeCountChanged') likeCountChanged = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }
  handleLikeClicked() {
    this.product.likeCount++;
    this.likeCountChanged.emit(this.product);
  }
}
