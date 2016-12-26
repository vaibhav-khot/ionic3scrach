import { Component } from '@angular/core';
import { NavController ,NavParams ,Events,App} from 'ionic-angular';
import { ProductPage } from '../product/product';
import { BasePage } from '../base/base';
import { LoginPage } from '../login/login';
import { Api } from '../../providers/api';
import { Shareservice } from '../../providers/shareservice';
// import { CartPage } from '../cart/cart';
// import { ProductBasePage } from '../productbase/productbase';

/*
  Generated class for the Product page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-productbase',
  templateUrl: 'productbase.html',
  providers:[Shareservice,Api]
})
export class ProductBasePage {
  login_data:any=JSON.parse(localStorage.getItem("login_data"));

  rootPage=ProductPage;
  cartitem:number;
  Fn=this.login_data.data.first_name;
  ln=this.login_data.data.last_name;
  em=this.login_data.data.email;
  pn=this.login_data.data.phone_no;
  un=this.login_data.data.username;


  constructor(public navCtrl: NavController , public navParams: NavParams, public api: Api,
    public ss : Shareservice,public events: Events,public appCtrl: App
  )  {
    // this.cartitem= this.navParams.get('cartItems')

    this.api.loadCart().then(res=>{

    console.log("Load Cart Successfully");
    console.log(res.count);
    this.cartitem=res.count;
    this.api.createCartEvent(res.count);

  })
  this.events.subscribe('CartAdded', (item) => {
    // userEventData is an array of parameters, so grab our first and only arg
    console.log('Welcome', item);
    this.cartitem=item;
  });
}
  logout(){
  localStorage.clear();
  this.navCtrl.popToRoot().then(res=>{
      this.navCtrl.push(LoginPage);
  });

  console.log(this.appCtrl.getRootNav());
  console.log(this.navCtrl.popToRoot());
  // this.appCtrl.getRootNav().push();

  }

  pushProduct(e){
console.log(e);

  }
  ionViewDidLoad() {
    console.log('Hello ProductBasePage Page');
  }


}
