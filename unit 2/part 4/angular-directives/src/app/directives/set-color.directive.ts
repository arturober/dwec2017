import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[adSetColor]'
})
export class SetColorDirective {
    private isSet = false;
    @Input() color: string;

    constructor(private elem: ElementRef) {}

    @HostListener('click')
    onclick() {
        if (this.isSet) {
            this.elem.nativeElement.style.backgroundColor = '';
        } else {
            this.elem.nativeElement.style.backgroundColor = this.color;
        }
        this.isSet = !this.isSet;
    }
}
