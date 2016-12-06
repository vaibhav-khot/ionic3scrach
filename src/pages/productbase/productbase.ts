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
  login_data:any=JSON.parse(localStorage.getItem("login_data"));
  rootPage=ProductPage;
  Fn=this.login_data.data.first_name;
  ln=this.login_data.data.last_name;
  em=this.login_data.data.email;
  pn=this.login_data.data.phone_no;
  un=this.login_data.data.username;


  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    console.log('Hello ProductBasePage Page');
  
  }

}
