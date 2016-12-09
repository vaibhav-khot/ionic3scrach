import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Api } from '../../providers/api';

/*
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController,public navPrams : NavParams,public api :Api) {
    let e = navPrams.get("e");
    let id:number;
    console.log(e);
    console.log(e.product_category_id);
    id=e.product_category_id;
    api.loadProduct(id).then(res=>{
    console.log(res);

    })

  }

  ionViewDidLoad() {
    console.log('Hello ListPage Page');
  }

}
