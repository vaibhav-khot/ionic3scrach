import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Httpservice } from './httpservice';


/*
  Generated class for the Api provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Api {
product:any;
  constructor(public http: Httpservice) {
    console.log('Hello Api Provider');

  }
  loadProduct(id):Promise<any>  {
var url ="http://localhost:1337/staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id="+id+"&limit=10&page=1";
//var url ="http://staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id="+id+"&limit=10&page=1";

return new Promise(resolve=>{
  this.http.get(url)
        // Call map on the response observable to get the parsed people object
        .map(res => res.json())
        // Subscribe to the observable to get the parsed people object and attach it to the
        // component
        .subscribe(data=>{
          console.log(data);
          resolve(data);
        });
      })
  }

  loadProduct1(id,url):Promise<any>  {
//var url ="http://localhost:1337/staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id="+id+"&limit=10&page=1";
// var url ="http://staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id="+id+"&limit=10&page=1";

return new Promise(resolve=>{
  this.http.get(url)
        // Call map on the response observable to get the parsed people object
        .map(res => res.json())
        // Subscribe to the observable to get the parsed people object and attach it to the
        // component
        .subscribe(data=>{
          console.log(data);
          resolve(data);
        });
      })
  }

  loadDetails(id):Promise<any>  {
//var url ="http://localhost:1337/staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id="+id+"&limit=10&page=1";
// var url ="http://staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id="+id+"&limit=10&page=1";
 var url ="http://localhost:1337/staging.php-dev.in:8844/trainingapp/api/products/getDetail?product_id="+id;

return new Promise(resolve=>{
  this.http.get(url)
        // Call map on the response observable to get the parsed people object
        .map(res => res.json())
        // Subscribe to the observable to get the parsed people object and attach it to the
        // component
        .subscribe(data=>{
          console.log(data);
          resolve(data);
        });
      })
  }

}
