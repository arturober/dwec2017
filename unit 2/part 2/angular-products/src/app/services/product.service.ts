import { IProduct } from '../interfaces/i-product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): IProduct[] {
    return [
        {
            id: 1,
            description: 'SSD 250GB hard drive',
            available: new Date('2016-10-03'),
            price: 75,
            imageUrl: 'assets/ssd.jpg',
            rating: 5
        },
        {
            id: 2,
            description: '500GB hard drive',
            available: new Date('2016-08-30'),
            price: 45.9,
            imageUrl: 'assets/hdd.jpg',
            rating: 2
        },
        {
            id: 3,
            description: 'LGA1151 Motherboard',
            available: new Date('2016-09-15'),
            price: 96.95,
            imageUrl: 'assets/motherboard.jpg',
            rating: 4
        },
        {
            id: 4,
            description: 'DDR4 2400Mhz 16GB RAM',
            available: new Date('2017-03-27'),
            price: 198.35,
            imageUrl: 'assets/ram.jpg',
            rating: 3
        }
    ];
  }

}
