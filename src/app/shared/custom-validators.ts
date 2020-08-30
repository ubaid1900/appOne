import { AbstractControl, ValidationErrors, FormControl, ValidatorFn } from '@angular/forms';

export function noSpaces(control: AbstractControl): ValidationErrors | null {
  const spacesRegex = `^\\s{${3},}$`;
  const regex = new RegExp(spacesRegex);
  const isJustSpaces = regex.test(control.value);

  if (isJustSpaces) {
    return { somekey: true };
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