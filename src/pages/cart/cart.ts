import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
import { Api } from '../../providers/api';


/*
  Generated class for the Cart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  cartData:any;
  total:any;

  constructor(public navCtrl: NavController,
              public api : Api,
              public params : NavParams
  ) {
console.log("Cart Page Constuctor");    
let data= this.params.get("cart");
console.log(data.data);
this.cartData=data.data;




  }

  ionViewDidLoad() {
    console.log('Hello CartPage Page');
  }

}
