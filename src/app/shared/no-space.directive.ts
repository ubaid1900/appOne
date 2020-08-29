import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { noSpaces } from '../components/product-management/add-product/add-product.component';

@Directive({
  selector: '[appNoSpace]',
  providers: [{provide: NG_VALIDATORS, useExisting: NoSpaceDirective, multi: true}]
})
export class NoSpaceDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors {
    return noSpaces(control);
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }

}
