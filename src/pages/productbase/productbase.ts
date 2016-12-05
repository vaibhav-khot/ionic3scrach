import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductPage } from '../product/product';

/*
  Generated class for the Product page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-productbase',
  templateUrl: 'productbase.html'
})
export class ProductBasePage {

rootPage=ProductPage;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ProductBasePage Page');
  }

}
