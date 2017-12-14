import { animate, state, style, transition, trigger, stagger, query } from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { ProductService } from '../services/product.service';
import { IProduct } from '../interfaces/i-product';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ap-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    animations: [
        trigger('animateProd', [
            state('selected', style({ borderLeft: '40px solid lightgreen' })),
            transition(':leave', [
                animate('500ms ease', style({ opacity: 0, transform: 'translateX(100%)' }))
            ]),
            transition('* <=> selected', [
                animate('500ms ease')
            ])
        ]),
        trigger('animateList', [
            transition(':enter', [
                query('ap-product-item', [
                    style({ opacity: 0, transform:  'translateX(-200px)' }),
                    stagger(100, [
                        animate('600ms cubic-bezier(.64,.49,.49,1.54)', style({ opacity: 1, transform: 'none' })),
                    ])
                ], { optional: true })
            ])
        ])
    ]
})
export class ProductListComponent implements OnInit {
    title = 'My product\'s list';
    headers = {
        img: 'Image',
        desc: 'Product',
        price: 'Price',
        avail: 'Available',
        rating: 'Rating'
    };
    showImages = true;
    filterSearch = '';

    products: IProduct[] = [];

    constructor(private productService: ProductService, private titleService: Title) {}

    ngOnInit() {
        this.titleService.setTitle('Product list | Angular products');
        this.productService.getProducts().subscribe(
            products => this.products = products,
            (error: string) => console.log(error),
            () => console.log('Products loading finished!')
        );
    }

    toggleImage() {
        this.showImages = !this.showImages;
    }

    deleteProduct(prod: IProduct) {
        this.products.splice(this.products.indexOf(prod), 1);
        this.filterSearch = '';
    }

    toggleSelected(prod: IProduct) {
        prod.state = prod.state === 'selected' ? '' : 'selected';
    }
}
