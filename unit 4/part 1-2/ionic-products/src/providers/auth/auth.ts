import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import { URL_SERVER } from '../../app/app.constants';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthProvider {
  constructor(public http: HttpClient, public storage: Storage) {}

  login(email: string, password: string): Observable<{}> {
    return this.http
      .post(URL_SERVER + '/auth/login', { email: email, password: password })
      .catch((response: HttpErrorResponse) => {
        console.log(response);
        if (response.status == 200) return Observable.throw(response.message);
        else
          return Observable.throw(
            `Unknown error: ${response.statusText} (${response.status})`
          );
      })
      .flatMap((json: { ok: boolean; error: string; token: string }) => {
        if (!json.ok) throw json.error;
        return Observable.fromPromise(this.storage.set('id_token', json.token));
      });

  }

  isLogged(): Observable<boolean> {
    return Observable.fromPromise(this.storage.get('id_token'))
      .flatMap(token => {
        if (!token) return Observable.of(false);
        return this.http
          .get(URL_SERVER + '/auth/token')
          .map((response: { ok: boolean }) => (response.ok ? true : false))
          .catch(error => Observable.of(false));
      })
      .catch(error => {
        return Observable.of(false);
      });
  }
}
