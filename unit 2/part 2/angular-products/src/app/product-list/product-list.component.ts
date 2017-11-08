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
    showAddProd = false;
    filterSearch = '';

    products: IProduct[] = [];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.products = this.productService.getProducts();
    }

    toggleImage() {
        this.showImages = !this.showImages;
    }

    deleteProduct(prod: IProduct) {
        this.products.splice(this.products.indexOf(prod), 1);
        this.filterSearch = '';
    }

    addProduct(newProd) {
        this.products.push(newProd);
        this.showAddProd = false;
    }
}
