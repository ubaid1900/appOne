import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mixedCase'
})
export class MixedCasePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    console.log(args);
    
    const v = [...value];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < value.length; i++) {
      if (i % 2 === 0) {
        v[i] = value[i].toUpperCase();
      } else {
        v[i] = value[i].toLowerCase();
      }
    }
    return v.join('');
  }

}
