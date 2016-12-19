import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Events, LoadingController ,Loading } from 'ionic-angular';

import 'rxjs/add/operator/map';

/*
  Generated class for the Loader provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Loader {

  constructor(public http: Http,
    public loadingCtrl: LoadingController
  ) {
    console.log('Hello Loader Provider');
  }
createLoader(): Loading {
  let loader =this.loadingCtrl.create({content : "Please Wait"});
return loader;
}
}
