import { Component } from '@angular/core';
import { NavController ,LoadingController } from 'ionic-angular';
import { HomescreenPage } from '../homescreen/homescreen';
import { Loginservice } from '../../providers/loginservice';
import { Api } from '../../providers/api';
import { ProductBasePage } from '../productbase/productbase';
import { BasePage } from '../base/base';
import 'rxjs/Rx';

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
 login_err:string;
 cartitems:number;

  handleError(error: any): Promise<any> {
    console.log("error=================")
   console.error('An error occurred', error); // for demo purposes only
   return Promise.reject(error.message || error);
 }

 constructor(
   public loginservice:Loginservice,
   private navCtrl : NavController,
   public loadingCtrl: LoadingController,
   public api: Api

 ) {

  // this.checklogin();
 }
  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

validatelogin(un,ps):void {
    console.log('Checking Login');
    console.log(this.user);
    // Create the popup
    let loadingPopup = this.loadingCtrl.create({
          content: 'Loading data...',
          dismissOnPageChange:true
        });
loadingPopup.present();
    this.loginservice.loadlogin(this.user.un,this.user.ps).then(res=>{
      console.log(res,"return by promise");
      console.log(res.message,"parsed message");
      loadingPopup.dismiss();
        if(res.status===200){


          // Show the popup

        this.login_err=JSON.stringify(res.message);

          this.navCtrl.push(ProductBasePage);


        // this.navCtrl.push(ProductBasePage);
      } else {
        if(res.status==401){
          this.login_err="Username/Password invalid";
        }


      }

      // console.log("hello===================");
       console.log(this.login_err,"Server message");
    })



      // if (un=="vaibhav" && ps==123){
      //   console.log("Login Sucess");
      //   this.navCtrl.push(HomescreenPage);
      // } else {
      // alert("Login Fail");
      // }

}

}
