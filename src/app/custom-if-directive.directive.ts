import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIfDirective]',
  standalone: true
})
export class CustomIfDirectiveDirective implements OnChanges{

  @Input({required : true})
  appCustomIfDirective !: boolean;

  constructor(private templateRef : TemplateRef<any>, private viewContainerRef : ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.appCustomIfDirective){
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear()
    }
  }

}
