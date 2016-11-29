import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController) {}

ionViewDidLoad() {
    console.log('Hello BasePage Page');
  }
  takeMeLogin():void {
    this.navCtrl.push(LoginPage);
  }

}
