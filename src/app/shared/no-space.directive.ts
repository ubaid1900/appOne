import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { noSpaces2 } from './custom-validators';

@Directive({
  selector: '[appNoSpace]',
  providers: [{provide: NG_VALIDATORS, useExisting: NoSpaceDirective, multi: true}]
})
export class NoSpaceDirective implements Validator {
  @Input('appNoSpace') num: number;

  constructor() { }
  validate(control: AbstractControl): ValidationErrors {
    // return noSpaces(control);
    return this.num ? noSpaces2(this.num)(control) : null;
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error("Method not implemented.");
  // }

}
