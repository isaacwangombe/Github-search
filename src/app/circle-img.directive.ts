import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCircleImg]'
})
export class CircleImgDirective {



  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.borderRadius='50%';

  }

}
