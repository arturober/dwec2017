import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { URL_SERVER } from '../../app/app.constants';
import { ResponseUser, OkResponse } from '../../models/response';
import { IUser } from '../../models/user';
import { HttpErrorResponse } from '@angular/common/http/src/response';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(public http: HttpClient) { }


  getMyProfile(): Observable<IUser> {
    return this.http.get(URL_SERVER + '/profile')
      .map((response: ResponseUser) => response.user);
  }

  changePassword(password: string): Observable<boolean> {
    return this.http.post(URL_SERVER + '/profile/password', {password})
      .map((response: OkResponse) => {
        if(response.ok) return true;
        throw response.error;
      }).catch((response: HttpErrorResponse) => {
        return Observable.throw("Couldn't change password");
      });
  }
}
