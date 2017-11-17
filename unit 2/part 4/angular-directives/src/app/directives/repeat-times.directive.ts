import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[adRepeatTimes]'
})
export class RepeatTimesDirective {
    @Input()
    set adRepeatTimes(num: number) {
      this.viewContainer.clear();

      for (let i = 0; i < num; i++) {
        this.viewContainer.createEmbeddedView(this.templateRef, {
          current: i + 1
        });
      }
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {}
}
