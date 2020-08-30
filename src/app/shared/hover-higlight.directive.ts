import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { BackForeColors } from '../models/BackForeColors';

@Directive({
  selector: '[appHoverHiglight]'
})
export class HoverHiglightDirective {

  constructor(private element: ElementRef) {
    // console.log(this.element);
    // console.log(this.element.nativeElement);
    // this.element.nativeElement.style.backgroundColor = 'yellow';    
  }

  @Input() appHighlightColor: BackForeColors;
  @HostListener('mouseenter') onMouseEnter() {    
    this.element.nativeElement.style.color = this.appHighlightColor.foreColor;
    this.element.nativeElement.style.backgroundColor = this.appHighlightColor.backColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.color = null;
    this.element.nativeElement.style.backgroundColor = null;
  }

}