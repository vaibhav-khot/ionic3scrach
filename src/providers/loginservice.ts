import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the Loginservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Loginservice {
  data1:any;
  message:any;
access_token:any;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) {
    console.log('Hello Loginservice Provider');

  }
  //While Running Browser
  url ="http://localhost:1337/staging.php-dev.in:8844/trainingapp/api/users/login";
  //While Running on Mobile
  //url ="http://staging.php-dev.in:8844/trainingapp/api/users/login";

  loadlogin(us: string,ps: string ):Promise<any> {
    var data = new FormData();
    data.append("email", us);//aaron.furtado@wwindia.com
    data.append("password", ps);//aaronf123
    // console.log(this.data1);
    console.log(this.message);

  // private headers = new Headers({'Content-Type': 'application/json'})
  // return this.http.post(this.url, data)
  //   .toPromise()
  // .then(res => res.json().data)
  // .catch();
return new Promise(resolve =>{
  this.http.post(this.url, data)
    .map(res => res.json().data.access_token)
        .subscribe(data=>{
          console.log("trigger subscribe");
           resolve(data);
this.access_token=data.data;

        })
      })

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
