import { Component, OnInit, ViewChild } from '@angular/core';
import { Product, Brand } from 'src/app/models/product';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { ICanDeactivate } from 'src/app/shared/can-deactivate.guard';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, ICanDeactivate {
  @ViewChild('productForm') productForm: any;
  product: Product;
  productRF: Product;
  message: string;
  brands$: Observable<Brand[]>;
  addProductForm: FormGroup;
  constructor(private productService: ProductService, private formBuilder: FormBuilder) { }

  canComponentBeDeactivated(): boolean {
    const b = this.productForm.dirty && !this.productForm.submitted;
    if (b) {
      return confirm('Unsaved changes!! do you still want to navigate away?');
    }
    return true;
  }

  ngOnInit(): void {
    // this.product = { id: 0, name: '', brand: null, likeCount: 0 };
    this.product = new Product();
    console.log(this.product.fragile);
    this.brands$ = this.productService.getBrands();

    this.addProductForm = this.formBuilder.group({
      name: [{}, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      brand: [{}, [Validators.required]],
      fragile: [{}]
    });
  }

  submitTheFormRF() {
    this.productRF = new Product();
    this.productRF.name = this.addProductForm.get('name').value;
    this.productRF.brand = this.addProductForm.get('brand').value;
    this.productRF.fragile = this.addProductForm.get('fragile').value;
    
    console.log(this.productRF);
    
    this.productService.addProduct(this.productRF);
    this.message = "The product was added.";
  }
  submitTheForm() {
    this.productService.addProduct(this.product);
    this.message = "The product was added.";
  }
}
