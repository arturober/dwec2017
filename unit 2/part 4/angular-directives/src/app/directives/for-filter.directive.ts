import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adForFilter]'
})
export class ForFilterDirective {
  @Input() set adForFilterFrom(array: any[]) {
    this.array = array;
  }

  @Input() set adForFilterBy(filter: (elem: any) => boolean) {
    this.viewContainer.clear();

    this.array.filter(filter).forEach(e => {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: e
      });
    });
  }

  private array: any[] = [];

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

}
