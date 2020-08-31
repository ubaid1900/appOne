import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product, Brand } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  // id: number;
  // product$: Observable<Product>;
  product: Product;
  message: string;
  brands$: Observable<Brand[]>;
  productFormGroup: FormGroup;

  constructor(private route: ActivatedRoute, private productService: ProductService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // this.product$ = this.productService.getProduct(this.id);
    this.brands$ = this.productService.getBrands();

    this.product = this.route.snapshot.data['retrievedProduct'];

    this.productFormGroup = this.fb.group({
      name: [{ value: this.product.name, disabled: false }, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      brand: [{ value: this.product.brand, disabled: false }, [Validators.required]],
      fragile: [{ value: this.product.fragile, disabled: false }]
    });

    // this.productFormGroup.patchValue({name: 'test', brand: this.product.brand});

    console.log(this.product);
  }

  submitTheForm() {
    console.log(this.product);
    console.log(this.productFormGroup.value);

    // this.product.name = this.productFormGroup.get('name').value;
    // this.product.brand = this.productFormGroup.get('brand').value;
    // this.product.fragile = this.productFormGroup.get('fragile').value;

    const id = this.product.id;
    this.product = this.productFormGroup.value;
    this.product.id = id;
    console.log(this.product);
    console.log(this.productFormGroup.value);

    this.productService.updateProduct(this.product);
    this.message = "The product was updated.";

  }

}
