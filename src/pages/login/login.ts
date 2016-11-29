import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage {
 c1:any=false;
constructor(public navCtrl: NavController) {

  }
ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }
checklogin():void {
    console.log('Checking Login');
    if (this.c1==false){
      alert ("Login Fail")
    }
  }
}
