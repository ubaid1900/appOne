import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverHiglightDirective } from './hover-higlight.directive';
import { NoSpaceDirective } from './no-space.directive';
import { MixedCasePipe } from './mixed-case.pipe';



@NgModule({
  declarations: [HoverHiglightDirective, NoSpaceDirective, MixedCasePipe],
  providers: [],
  exports: [HoverHiglightDirective, NoSpaceDirective, MixedCasePipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
