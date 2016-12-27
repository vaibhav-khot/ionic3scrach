import { Component } from '@angular/core';
import { NavController,NavParams, Events ,ToastController } from 'ionic-angular';
import { Api } from '../../providers/api';
import { DetailPage } from '../detail/detail';

/*
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  products: Array<{}> = [];
  products1: Array<{}> = [];
  products2:any;
  cartitem:any;
  title:any;
  id:number;






  constructor(public navCtrl: NavController,
              public navParams : NavParams,
              public api :Api,
              public events : Events,
              public toastCtrl: ToastController)

  {
    let e = navParams.get("e");
    let item = navParams.get("item");
    console.log("list page constructot")
    console.log(e);
    console.log(item);
    this.title=e.name;
    this.cartitem=item;
     console.log(e.product_category_id);
    this.id=e.product_category_id;
    // if(this.id!=1){
      this.api.loadProduct(this.id).then(res=>{
      console.log(res);
      this.products = res.data;
      this.showToast(res.data.length);
    })
  // }
  this.events.subscribe('Cart', (item) => {
    // userEventData is an array of parameters, so grab our first and only arg
    console.log('Welcome', item);
    this.cartitem=item;
  });

    this.events.subscribe('CartAdded', (item) => {
      // userEventData is an array of parameters, so grab our first and only arg
      console.log('Welcome', item);
      this.cartitem=item;
    });



}

/* Lazy Loading */
doInfinite(infiniteScroll){
  console.log("Sscroll");
  console.log(event);
  //var url1 ="http://staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id="+this.id+"&limit=10&page=1";
   //var url2 ="http://staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id="+this.id+"&limit=10&page=2";
  // var url1 ="http://localhost:1337/staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id="+this.id+"&limit=10&page=1";
   var url2 ="http://localhost:1337/staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id="+this.id+"&limit=10&page=2";

  //    this.api.loadProduct1(this.id,url1).then(res=>{
  //    console.log(res);
  //    this.products = res.data;
  //  })






  this.api.loadProduct1(this.id,url2).then(res=>{
  console.log(res);
    for (let item of res.data) {
      this.products.push(item);
      }
      this.showToast(res.data.length+10)
      infiniteScroll.enable(false);
    })
  }

viewProduct(product) {

  console.log("inside ViewProducts");

  var id = product.id;
  console.log(id);
   this.api.loadDetails(id).then(res=>{
     console.log("details got ");
     this.products2=res.data;
     console.log(this.products2);
     this.navCtrl.push(DetailPage,{product:res.data,item : this.cartitem})
     })

}
/* Toast method */
showToast(count) {
  let toast = this.toastCtrl.create({
    message: count + ' out of ' + count,
    duration: 3000,
    position: "bottom"
  });

  toast.present(toast);
}
  ionViewDidLoad() {
    console.log('Hello ListPage Page');
  }

}
