import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomescreenPage } from '../homescreen/homescreen';
import { Loginservice } from '../../providers/loginservice';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers :[Loginservice]
})


export class LoginPage {
 c1:any=false;
 user={un:"",ps:""};
 hello:any;
  handleError(error: any): Promise<any> {
    console.log("error=================")
   console.error('An error occurred', error); // for demo purposes only
   return Promise.reject(error.message || error);
 }
 constructor(public navCtrl: NavController,public loginservice:Loginservice) {}
  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }




checklogin(un,ps):void {
    console.log('Checking Login');
    console.log(this.user);
    this.loginservice.loadlogin(this.user.un,this.user.ps).then(res=>{
      console.log("a===================");

      console.log(res);
    

      this.hello=res;
      console.log("hello===================");
      console.log(this.hello);

    }).catch(this.handleError)





      // if (un=="vaibhav" && ps==123){
      //   console.log("Login Sucess");
      //   this.navCtrl.push(HomescreenPage);
      // } else {
      // alert("Login Fail");
      // }
  }
}
