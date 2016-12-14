import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { ProductPage } from '../product/product';
import { Api } from '../../providers/api';
import { Shareservice } from '../../providers/shareservice';
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
    public ss : Shareservice
  )  {
    // this.cartitem= this.navParams.get('cartItems')

    this.api.loadCart().then(res=>{

    console.log("Load Cart Successfully");
    console.log(res.count);
    this.cartitem=res.count;
    ss.setcart(res.count);

  })
}
  logout(){
  localStorage.clear();
  this.navCtrl.pop();

  }
  ionViewDidLoad() {
    console.log('Hello ProductBasePage Page');
  }

}
