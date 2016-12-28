import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Httpservice } from './httpservice';

import { Events, LoadingController} from 'ionic-angular';


// let loading = Loading.create({content:'My message'});
// nav.present(loading); //nav instance of NavController
//
// http.get('http://myurl.com')
// .subscribe(response=>{
// loading.dismiss();
// });
/*
  Generated class for the Api provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Api {
product:any;
  constructor(public http: Httpservice,
    public events: Events,
    // public loadingCtrl: LoadingController,



    ) {
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
 //var url ="http://staging.php-dev.in:8844/trainingapp/api/products/getDetail?product_id="+id;


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

  loadCart():Promise<any>  {
//var url ="http://localhost:1337/staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id="+id+"&limit=10&page=1";
// var url ="http://staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id="+id+"&limit=10&page=1";
 var url ="http://localhost:1337/staging.php-dev.in:8844/trainingapp/api/cart";
 //var url ="http://staging.php-dev.in:8844/trainingapp/api/cart";

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
  addCart(id,quantity):Promise<any>{
    var data = new FormData();
    data.append("product_id", id);//
    data.append("quantity", quantity);//
    var url ="http://localhost:1337/staging.php-dev.in:8844/trainingapp/api/addToCart";
    //var url ="http://staging.php-dev.in:8844/trainingapp/api/cart";

   return new Promise(resolve=>{
     this.http.post(url,data)
           // Call map on the response observable to get the parsed people object
           .map(res => res.json())
           // Subscribe to the observable to get the parsed people object and attach it to the
           // component
           .subscribe(data=>{
             console.log(data);
            //  console.log(data.total_carts);
             resolve(data);
             

           })
         })

  }
 

  // first page (publish an event when a user is created)
   createCartEvent(items) {
    console.log('Cart!')
    this.events.publish('Cart', items);
  }
  addCartEvent(items){
    console.log('Cart Added!')
    this.events.publish('CartAdded', items);

  }

  // second page (listen for the user created event)
  // events.subscribe('user:created', (userEventData) => {
  //   // userEventData is an array of parameters, so grab our first and only arg
  //   console.log('Welcome', userEventData[0]);
  // });
  //



}
