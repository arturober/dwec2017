import { Title } from '@angular/platform-browser';
import { ProductService } from '../services/product.service';
import { IProduct } from '../interfaces/i-product';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ap-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
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
}
