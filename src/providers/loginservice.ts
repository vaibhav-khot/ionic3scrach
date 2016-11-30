import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the Loginservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Loginservice {

  constructor(public http: Http) {
    console.log('Hello Loginservice Provider');
    // http.post('http://staging.php-dev.in:8844/trainingapp/api/users/login',);
  }
  url ="http://staging.php-dev.in:8844/trainingapp/api/users/login";
loadlogin(us,ps):Promise<any> {
  var formData = new FormData();
  formData.append("email",us)
  formData.append("password",ps)
  return this.http.post(this.url,{email:"a@b.com",password:"12345678"})
    .toPromise()
    .then(res => res.json().data)
    .catch();
}
}

//
// load() {
//   if (this.data) {
//     // already loaded data
//     return Promise.resolve(this.data);
//   }
//
//   // don't have the data yet
//   return new Promise(resolve => {
//     // We're using Angular HTTP provider to request the data,
//     // then on the response, it'll map the JSON data to a parsed JS object.
//     // Next, we process the data and resolve the promise with the new data.
//     this.http.get('path/to/data.json')
//       .map(res => res.json())
//       .subscribe(data => {
//         // we've got back the raw data, now generate the core schedule data
//         // and save the data for later reference
//         this.data = data;
//         resolve(this.data);
//       });
//   });
// }
