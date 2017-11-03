import { IProduct } from '../interfaces/i-product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'My product\'s list';
  headers = {img: 'Image', desc: 'Product', price: 'Price', avail: 'Available'};
  showImages = true;
  showAddProd = false;
  filterSearch = '';

  newProd: IProduct;

  products: IProduct[] = [{
    id: 1,
    description: 'SSD 250GB hard drive',
    available: new Date('2016-10-03'),
    price: 75,
    imageUrl: 'assets/ssd.jpg',
    rating: 5
  }, {
    id: 2,
    description: '500GB hard drive',
    available: new Date('2016-08-30'),
    price: 45.9,
    imageUrl: 'assets/hdd.jpg',
    rating: 2
  }, {
    id: 3,
    description: 'LGA1151 Motherboard',
    available: new Date('2016-09-15'),
    price: 96.95,
    imageUrl: 'assets/motherboard.jpg',
    rating: 4
  }, {
    id: 4,
    description: 'DDR4 2400Mhz 16GB RAM',
    available: new Date('2017-03-27'),
    price: 198.35,
    imageUrl: 'assets/ram.jpg',
    rating: 3
  }];

  constructor() { }

  ngOnInit() {
    this.initializeNewProd();
  }

  toggleImage() {
    this.showImages = !this.showImages;
  }

  deleteProduct(prod: IProduct) {
    this.products.splice(this.products.indexOf(prod), 1);
    this.filterSearch = '';
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newProd.imageUrl = reader.result;
    });
  }

  addProduct() {
    this.products.push(this.newProd);
    this.cancelAddProd();
  }

  cancelAddProd() {
    this.showAddProd = false;
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
