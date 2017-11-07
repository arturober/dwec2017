import { IProduct } from '../interfaces/i-product';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'ap-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
    @Input() product: IProduct;
    @Input() showImage: boolean;
    @Output() deleted: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    ngOnInit() {}

    delete() {
        this.deleted.emit();
    }
}
