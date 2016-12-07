import { Component , OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { Default } from '../../app/default';
import { Loginservice } from '../../providers/loginservice';





/*
  Generated class for the Product page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage implements OnInit {
//It is issential to intiate empty array
catName:string[]=[];
catImg:string[]=[];//Array<String>;
catLink:string[]=[];//Array<String>;
catPid:string[]=[];//Array<String>;

  constructor(public navCtrl: NavController,private http : Loginservice) {}

  ngOnInit(){

  this.http.getProductCategories().then(res=>{
    // console.log(JSON.stringify(_.keys(res)));
    console.log("Product TS");

    console.log(JSON.stringify(res));
    console.log(res);
    for(var i in res.data){
      console.log(res.data[i].name);
      console.log(res.data[i].product_images);
      console.log(res.data[i].link);
      console.log(res.data[i].product_category_id);
      this.catName.push(res.data[i].name);
      this.catImg.push(res.data[i].product_images);
      this.catLink.push(res.data[i].link);
      this.catPid.push(res.data[i].product_category_id);
}




// this.catName=JSON.stringify(res);

  });
  }

  ionViewDidLoad() {
    console.log('Hello ProductPage Page');
  }

}
