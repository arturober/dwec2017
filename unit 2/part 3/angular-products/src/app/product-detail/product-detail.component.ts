import { ProductService } from '../services/product.service';
import { IProduct } from '../interfaces/i-product';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ap-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    product: IProduct;
    constructor(
        private titleService: Title,
        private route: ActivatedRoute,
        private productService: ProductService,
        private router: Router
    ) {}

    ngOnInit() {
        this.titleService.setTitle('Product details | Angular products');
        const id = +this.route.snapshot.params.id;
        this.productService
            .getProduct(id)
            .subscribe(product => (this.product = product));
    }

    goBack() {
        this.router.navigate(['/products']);
    }

    changeRating(rating: number) {
        this.productService
            .changeRating(this.product.id, rating)
            .subscribe(
                ok => (this.product.rating = rating),
                error => console.error(error)
            );
    }
}
