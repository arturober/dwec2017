import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProductService } from '../services/product.service';
import { IProduct } from '../interfaces/i-product';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ap-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
    newProd: IProduct;

    constructor(private productService: ProductService, private titleService: Title,
                private router: Router) {}

    ngOnInit() {
        this.titleService.setTitle('New product | Angular products');
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
        this.productService.addProduct(this.newProd).subscribe(
            ok =>  {
                this.router.navigate(['/products']);
            },
            error => console.error(error)
        );

    }

    cancelAddProd() {
        this.router.navigate(['/products']);
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
