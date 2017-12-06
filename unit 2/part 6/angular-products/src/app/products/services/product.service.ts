import { ResponseProducts, ResponseProduct } from '../interfaces/response';
import { ResponseOk } from '../../interfaces/response';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { IProduct } from '../interfaces/i-product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    URL = 'http://arturober.com/products-angular/products';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this.http.get(this.URL)
            .catch((resp: HttpErrorResponse) => Observable.throw('Error getting products!' +
                 `. Server returned code ${resp.status}, message was: ${resp.message}`))
            .map((resp: ResponseProducts) => resp.products);
    }

    getProduct(id): Observable<IProduct> {
        return this.http.get(this.URL + `/${id}`)
            .catch((resp: HttpErrorResponse) => Observable.throw('Error getting products!' +
                 `. Server returned code ${resp.status}, message was: ${resp.message}`))
            .map((resp: ResponseProduct) => resp.product);
    }

    changeRating(id: number, rating: number): Observable<boolean> {
        return this.http.put(`${this.URL}/rating/${id}`, {rating})
            .catch((resp: HttpErrorResponse) => Observable.throw('Error changing rating!'))
            .map((resp: ResponseOk) => {
                if (!resp.ok) {
                    throw resp.error;
                }
                return true;
            });
    }

    deleteProduct(id: number): Observable<boolean> {
        return this.http.delete(`${this.URL}/${id}`)
            .catch((resp: HttpErrorResponse) => Observable.throw('Error deleting!'))
            .map((resp: ResponseOk) => {
                if (!resp.ok) {
                    throw resp.error;
                }
                return true;
            });
    }

    addProduct(product: IProduct): Observable<boolean> {
        console.log(product);
        return this.http.post(this.URL, product)
            .catch((resp: HttpErrorResponse) => Observable.throw('Error adding!'))
            .map((resp: ResponseOk) => {
                if (!resp.ok) {
                    throw resp.error;
                }
                product.id = resp.id;
                return true;
            });
    }
}
