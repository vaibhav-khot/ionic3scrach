import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Shareservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Shareservice {
cartitem:number;
  constructor(public http: Http) {
    console.log('Hello Shareservice Provider');
  }
  setcart(items){
    this.cartitem=items;
  }
  getcart(){
    return this.cartitem;
    
  }

}
