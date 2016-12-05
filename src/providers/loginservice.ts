import { Injectable } from '@angular/core';
 import { Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//import { HTTP } from 'ionic-native';//ioniv nativ http
import { Httpservice } from './httpservice';


/*
  Generated class for the Loginservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Loginservice {
  data1:any;
  message:any;

  // private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Httpservice) {
    console.log('Hello Loginservice Provider');
    // private headers = new Headers({"X-Access-Token":localStorage.getItem("access_token")})
    // private headers = new Headers({"access_token":localStorage.getItem("access_token")})

  }

  // loadlogin(us: string,ps: string ):any{
  //   //While Running Browser
  //   //While Running Browser
  //   HTTP.post(this.url, {us,ps}, {})
  // .then(data => {
  //
  //   console.log(data.status);
  //   console.log(data.data); // data received by server
  //   console.log(data.headers);
  //
  // })
  // .catch(error => {
  //
  //   console.log(error.status);
  //   console.log(error.error); // error message as string
  //   console.log(error.headers);
  //
  // });
  // }
  //While Running Browser
  url ="http://localhost:1337/staging.php-dev.in:8844/trainingapp/api/users/login";
  //While Running on Mobile
  //url ="http://staging.php-dev.in:8844/trainingapp/api/users/login";
//trainingapp/api/users/login
   loadlogin(us: string,ps: string ):Promise<any> {
     var data = new FormData();
     data.append("email", us);//aaron.furtado@wwindia.com
     data.append("password", ps);//aaronf123
     console.log(this.message);

   var headers = new Headers({"access_token":localStorage.getItem("access_token")});
  // return this.http.post(this.url, data)
  //   .toPromise()
  // .then(res => res.json().data)
  // .catch();

 return new Promise(resolve =>{
   this.http.post(this.url, data)
     .map(res => res.json())
         .subscribe(data=>{
           console.log("trigger subscribe");
           console.log(data);
           resolve(data);
           localStorage.setItem("access_token",data.data.access_token);
         },function(err){
           console.log("err");
           console.log(err);
           resolve(err);
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
