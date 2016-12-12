import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Api } from '../../providers/api';
import { DetailPage } from '../detail/detail';

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
  products: Array<{}> = [];
  products1: Array<{}> = [];

  constructor(public navCtrl: NavController,public navPrams : NavParams,public api :Api) {
    let e = navPrams.get("e");
    let id:number;
    console.log(e);
    console.log(e.product_category_id);
    id=e.product_category_id;
    if(id!=1){
      api.loadProduct(id).then(res=>{
      console.log(res);
      this.products = res.data;
    })
  } else {
    //var url1 ="http://staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id="+id+"&limit=10&page=1";
  //  var url2 ="http://staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id="+id+"&limit=10&page=2";
    var url1 ="http://localhost:1337/staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id="+id+"&limit=10&page=1";
    var url2 ="http://localhost:1337/staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id="+id+"&limit=10&page=2";

      api.loadProduct1(id,url1).then(res=>{
      console.log(res);
      this.products = res.data;
    })
    api.loadProduct1(id,url2).then(res=>{
    console.log(res);
    this.products1 = res.data;
  })
  }
}

viewProduct(product){
this.navCtrl.push(DetailPage,{product:product})

}

  ionViewDidLoad() {
    console.log('Hello ListPage Page');
  }

}
