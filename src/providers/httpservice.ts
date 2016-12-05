import { Injectable } from '@angular/core';
import { Http,Headers,Request,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx'; //for Observable.throw(res);
import {Observable} from 'rxjs/Observable';


/*
  Generated class for the Httpservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Httpservice //extends Http
 {

  // constructor(_backend, _defaultOptions) {
  //   console.log('Hello Httpservice Provider');
  //   let access_token = localStorage.getItem('access_token'); // your custom token getter function here
  //   _defaultOptions.headers.set('access_token', access_token );//`Bearer ${token}`
  //   console.log(_defaultOptions.headers);
  //   super(_backend,_defaultOptions);
  //
  // }



  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('access_token', localStorage.getItem("access_token"));
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    console.log("Custom Service");
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers})//.catch(this.catchAuthError(this));

  }
  private catchAuthError (self: Httpservice) {
   // we have to pass HttpService's own instance here as `self`
   return (res: Response) => {
     console.log(JSON.stringify(res));
     console.log("401 error");

     if (res.status === 401 || res.status === 403) {
       // if not authenticated
       console.log(res);
       }
     return Observable.throw(res);

   }
}
}
