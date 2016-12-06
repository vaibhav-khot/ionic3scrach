import { Component } from '@angular/core';
import { NavController ,LoadingController } from 'ionic-angular';
import { HomescreenPage } from '../homescreen/homescreen';
import { Loginservice } from '../../providers/loginservice';
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
 hello:string;

  handleError(error: any): Promise<any> {
    console.log("error=================")
   console.error('An error occurred', error); // for demo purposes only
   return Promise.reject(error.message || error);
 }

 constructor(public loginservice:Loginservice,private navCtrl : NavController,public loadingCtrl: LoadingController) {}
  ionViewDidLoad() {
    console.log('Hello LoginPage Page');




  }






checklogin(un,ps):void {
    console.log('Checking Login');
    console.log(this.user);
    // Create the popup




    this.loginservice.loadlogin(this.user.un,this.user.ps).then(res=>{
      console.log("a===================");
      console.log(res);
      console.log(JSON.stringify(res));


      // this.hello=JSON.stringify(res);
      if(res.status===200){
        let loadingPopup = this.loadingCtrl.create({
            content: 'Loading data...'
          });

          // Show the popup
          loadingPopup.present();
        this.hello=JSON.stringify(res.message);

        setTimeout(() => {
          this.hello=JSON.stringify(res.message);
          loadingPopup.dismiss();
          this.navCtrl.push(ProductBasePage);
          }, 1000);

        // this.navCtrl.push(ProductBasePage);
      } else {
        this.hello=res.json().user_msg
        // this.navCtrl.push(BasePage);
      }

      // console.log("hello===================");
      // console.log(this.hello);


  })


      // if (un=="vaibhav" && ps==123){
      //   console.log("Login Sucess");
      //   this.navCtrl.push(HomescreenPage);
      // } else {
      // alert("Login Fail");
      // }
  }
}
