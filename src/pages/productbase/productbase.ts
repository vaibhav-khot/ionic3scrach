import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductPage } from '../product/product';

/*
  Generated class for the Product page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-productbase',
  templateUrl: 'productbase.html'
})
export class ProductBasePage {
login_data:any=localStorage.getItem("login_data");
rootPage=ProductPage;
profile_pic=this.login_data.data.profile.pic;


  constructor(public navCtrl: NavController) {
console.log(this.profile_pic);
  }
  ionViewDidLoad() {
    console.log('Hello ProductBasePage Page');

  }

}
