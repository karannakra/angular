import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class AppUnless {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.template);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(
    private template: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
    console.log(vcRef);
  }
}
