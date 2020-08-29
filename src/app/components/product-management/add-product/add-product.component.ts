import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Product, Brand } from 'src/app/models/product';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { ICanDeactivate } from 'src/app/shared/can-deactivate.guard';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, ICanDeactivate {
  @ViewChild('productForm') productForm: any;
  @ViewChildren('forTag') tagsTD: any;
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
      name: [{ value: 'dd', disabled: false }, [Validators.required, Validators.minLength(3), Validators.maxLength(10), noSpaces2(3)]],
      brand: [null, [Validators.required]],
      fragile: [],
      tags: this.formBuilder.array([this.formBuilder.control('init', [Validators.required, Validators.minLength(3), Validators.maxLength(10)])])
    });
  }

  public get tags(): FormArray {
    return this.addProductForm.get('tags') as FormArray;
  }

  public get name(): FormControl {
    return this.addProductForm.get('name') as FormControl;
  }  

  addTag() {
    this.tags.push(this.formBuilder.control('new', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]))
    console.log(this.addProductForm.value);
    console.log(this.tags.value);
    console.log(this.tags.status);
  }
  tagArray = ['init'];
  addTagTD() {
    this.tagArray.push('new');
    console.log(this.productForm);
    console.log(this.tagsTD);
    
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

export function noSpaces(control: AbstractControl) : ValidationErrors | null {
  const spacesRegex = `^\\s{${3},}$`;
  const regex = new RegExp(spacesRegex);
  const isJustSpaces = regex.test(control.value);
  
  if (isJustSpaces) {
    return {somekey: true};
  }
  return null;
}

export function noSpaces2(num: number): ValidatorFn {
  return (c: FormControl): ValidationErrors | null => {
    const spacesRegex = `^\\s{${num},}$`;
    const regex = new RegExp(spacesRegex);
    const isJustSpaces = regex.test(c.value);
    if (isJustSpaces) {
      return {somekey: true};
    }
    return null;
  };
}