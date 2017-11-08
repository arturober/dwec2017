import { IProduct } from '../interfaces/i-product';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ap-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
    newProd: IProduct;
    @Output() productAdd: EventEmitter<IProduct> = new EventEmitter<IProduct>();
    @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    ngOnInit() {
        this.initializeNewProd();
    }

    changeImage(fileInput: HTMLInputElement) {
        if (!fileInput.files || fileInput.files.length === 0) {
            return;
        }
        const reader: FileReader = new FileReader();
        reader.readAsDataURL(fileInput.files[0]);
        reader.addEventListener('loadend', e => {
            this.newProd.imageUrl = reader.result;
        });
    }

    addProduct() {
        this.productAdd.emit(this.newProd);
        this.cancelAddProd();
    }

    cancelAddProd() {
        this.cancel.emit();
        this.initializeNewProd();
    }

    private initializeNewProd() {
        this.newProd = {
            id: 0,
            available: '',
            description: '',
            imageUrl: '',
            price: 0,
            rating: 0
        };
    }
}
