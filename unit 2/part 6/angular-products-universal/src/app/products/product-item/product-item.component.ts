import { ProductService } from '../services/product.service';
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

    constructor(private productService: ProductService) {}

    ngOnInit() {}

    delete() {
        this.productService.deleteProduct(this.product.id).subscribe(
            ok => this.deleted.emit(),
            error => console.error(error)
        );
    }

    changeRating(rating: number) {
        this.productService.changeRating(this.product.id, rating).subscribe(
            ok => this.product.rating = rating,
            error => console.error(error)
        );
    }
}
