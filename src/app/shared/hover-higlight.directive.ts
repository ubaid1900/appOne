import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverHiglight]'
})
export class HoverHiglightDirective {

  constructor(private element: ElementRef) {
    console.log(this.element);
    console.log(this.element.nativeElement);
    this.element.nativeElement.style.backgroundColor = 'lightblue';    
  }

}
