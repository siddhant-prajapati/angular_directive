import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
  standalone: true
})
export class HighlighterDirective implements OnChanges{

  @Input({required : true})
  appHighlighter !: string;

  constructor(private elementRef : ElementRef) {
    //console.log(this.elementRef.nativeElement)
    
   }
  ngOnChanges(): void {
    this.elementRef.nativeElement.style.color = this.appHighlighter
  }

}
