import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ResponseProducts, ResponseProduct, OkResponse, ResponseComments } from '../../models/response';
import { IProduct } from '../../models/product';
import { URL_SERVER } from '../../app/app.constants';
import { IComment } from '../../models/comment';


@Injectable()
export class ProductsProvider {

  constructor(public http: HttpClient) {
  }

  getProducts(): Observable<IProduct[]> {
      return this.http.get(URL_SERVER + '/products')
          .map((resp: ResponseProducts) => resp.products);
  }

  getMyProducts(): Observable<IProduct[]> {
    return this.http.get(URL_SERVER + '/products/my')
        .map((resp: ResponseProducts) => resp.products);
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get(URL_SERVER + '/products/' + id)
      .map((response: ResponseProduct) => response.product);
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.http.post(URL_SERVER + '/products/', product)
      .map((response: ResponseProduct) => {
        if(!response.ok) throw response.error;
        return response.product;
      })
      .catch((response: HttpErrorResponse) => {
        if(response.status === 200) {
          return Observable.throw(response.message);
        }
        return Observable.throw("Error creating the product");
      });
  }

  deleteProduct(id: number): Observable<boolean> {
    return this.http.delete(URL_SERVER + '/products/' + id)
      .map((response: OkResponse) => response.ok);
  }

  getComments(id: number): Observable<IComment[]> {
    return this.http.get(URL_SERVER + '/comments/product/' + id)
      .map((response: ResponseComments) => response.comments);
  }
}
