import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
product:any;
productSlide:any;
// myRating:number;

  constructor(public navCtrl: NavController,public navParams: NavParams) {

    var product=this.navParams.get('product');
    console.log(product);
    this.product=product;
    // this.myRating=product.rating;

    this.productSlide={
    initialSlide: 1,
    loop: true
    }
  }

  ionViewDidLoad() {
    console.log('Hello DetailPage Page');
  }

}
