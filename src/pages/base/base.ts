import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductBasePage } from '../productbase/productbase';
import { LoginPage } from '../login/login';

/*
  Generated class for the Base page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-base',
  templateUrl: 'base.html'
})
export class BasePage {

  constructor(public navCtrl: NavController) {
    this.checklogin();
  }

  ionViewDidLoad() {
    console.log('Hello BasePage Page');
  }
  checklogin():void {
    if(localStorage.getItem("login_data")){
        this.navCtrl.push(ProductBasePage);

    } else
    {
      this.navCtrl.push(LoginPage);
      }
  }

}
