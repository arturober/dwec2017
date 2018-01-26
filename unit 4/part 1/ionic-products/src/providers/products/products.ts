import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {IProduct} from '../../interfaces/i-product';
import {ResponseProducts} from '../../interfaces/response';


@Injectable()
export class ProductsProvider {
  URL = 'http://arturober.com/products-angular/products';

  constructor(public http: HttpClient) {
  }

  getProducts(): Observable<IProduct[]> {
      return this.http.get(this.URL)
          .catch((resp: HttpErrorResponse) => Observable.throw('Error getting products!' +
              `. Server returned code ${resp.status}, message was: ${resp.message}`))
          .map((resp: ResponseProducts) => resp.products);
  }

}
