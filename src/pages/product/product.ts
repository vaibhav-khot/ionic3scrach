import { Component , OnInit } from '@angular/core';
import { NavController ,Events ,Slides} from 'ionic-angular';

// import { Default } from '../../app/default';
import { Loginservice } from '../../providers/loginservice';
import { Shareservice } from '../../providers/shareservice';
import { ListPage } from '../list/list';
import { ProductBasePage } from '../productbase/productbase';
import { Api } from '../../providers/api';
import { Default } from '../../app/default';






/*
  Generated class for the Product page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
  providers: [Shareservice]
})
export class ProductPage implements OnInit {
//It is issential to intiate empty array
cat:any={};
cartitem:any;
mySlideOptions = {
    pager : true
  };

//  cat.catName:string[]=[];
// cat.catImg:string[]=[];//Array<String>;
// cat.catLink:string[]=[];//Array<String>;
// cat.catPid:string[]=[];//Array<String>;

  constructor(public navCtrl: NavController,private http : Loginservice ,
    public ss : Shareservice, public api : Api,public events : Events
  ) {
    console.log("Hello product Page");

    this.cat.data=[];
    this.cat.data.catName=[];
    this.cat.data.catImg=[];//Array<String>;
    this.cat.data.catLink=[];//Array<String>;
    this.cat.data.catPid=[];//Array<String>;
    console.log(JSON.stringify(Default.API.mock._d.data[0]))
    // console.log(ss.getcart());
  //   this.api.loadCart().then(res=>{
  //
  //   console.log("Load Cart Successfully");
  //   console.log(res.count);
  //   this.cartitem=res.count;
  //
  // })
//  second page (listen for the user created event)
  this.events.subscribe('Cart', (item) => {
    // userEventData is an array of parameters, so grab our first and only arg
    console.log('Welcome', item);
    this.cartitem=item;
  });
  this.events.subscribe('CartAdded', (item) => {
    // userEventData is an array of parameters, so grab our first and only arg
    console.log('Welcome', item);
    this.cartitem=item;
  });

  }
pushProduct(e){

// this.navCtrl.push(TablePage);
console.log("productpage navctrl");
console.log(e);
switch (e)
{
  case 1:
  this.navCtrl.push(ListPage,{e:Default.API.mock._d.data[0],item : this.cartitem});
  break;
  case 2:
  this.navCtrl.push(ListPage,{e:Default.API.mock._d.data[1],item : this.cartitem});

  break;
  case 3:
  this.navCtrl.push(ListPage,{e:Default.API.mock._d.data[2],item : this.cartitem});

  break;
  case 4:
  this.navCtrl.push(ListPage,{e:Default.API.mock._d.data[3],item : this.cartitem});

  break;
  case 5:
  this.navCtrl.push(ListPage,{e:Default.API.mock._d.data[4],item : this.cartitem});

  break;
  default :
  console.log("Default Switch");
}

}

ngOnInit(){
  // this.cartitem=this.ss.getcart();
    this.cartitem=this.ss.getcart();
//   this.http.getProductCategories().then(res=>{
//     // console.log(JSON.stringify(_.keys(res)));
//   console.log("Product TS");
//
//   console.log(JSON.stringify(res));
//   console.log(res.data);
//   this.cat.data=res.data;
//
// //     for(var i in res.data)
// //     {
// //       console.log(res.data[i].name);
// //       console.log(res.data[i].product_images);
// //       console.log(res.data[i].link);
// //       console.log(res.data[i].product_category_id);
// //        this.cat.data.catName.push(res.data[i].name);
// //        this.cat.data.catImg.push(res.data[i].product_images);
// //        this.cat.data.catLink.push(res.data[i].link);
// //        this.cat.data.catPid.push(res.data[i].product_category_id);
// //       //
// //
// // }
// console.log(this.cat);
//
//
//
//
// // this.catName=JSON.stringify(res);
//
//   });
  // console.log(this.cat.catPid[0])
  }

  ionViewDidLoad() {
    console.log('Hello ProductPage Page');
  }

}
