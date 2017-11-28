import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProductService } from '../services/product.service';
import { IProduct } from '../interfaces/i-product';
import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
    selector: 'ap-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
    newProd: IProduct;
    cancelled = false;
    minDate = new Date();
    @ViewChild('addForm') addForm: NgForm;

    constructor(
        private productService: ProductService,
        private titleService: Title,
        private router: Router
    ) {}

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
        console.log(this.addForm.value);
        this.productService.addProduct(this.newProd).subscribe(
            ok => {
                this.router.navigate(['/products']);
            },
            error => console.error(error)
        );
    }

    cancelAddProd() {
        this.cancelled = true;
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

    validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
        return {
            [validClass]: ngModel.touched && ngModel.valid,
            [errorClass]: ngModel.touched && ngModel.invalid
        };
    }
}
