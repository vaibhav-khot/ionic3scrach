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
cat:any={};

//  cat.catName:string[]=[];
// cat.catImg:string[]=[];//Array<String>;
// cat.catLink:string[]=[];//Array<String>;
// cat.catPid:string[]=[];//Array<String>;

  constructor(public navCtrl: NavController,private http : Loginservice) {
    this.cat.data=[];
    this.cat.data.catName=[];
    this.cat.data.catImg=[];//Array<String>;
    this.cat.data.catLink=[];//Array<String>;
    this.cat.data.catPid=[];//Array<String>;


  }
pushProduct(){
console.log(this);

}
  ngOnInit(){

  this.http.getProductCategories().then(res=>{
    // console.log(JSON.stringify(_.keys(res)));
    console.log("Product TS");

    console.log(JSON.stringify(res));
    console.log(res.data);
    this.cat.data=res.data;

//     for(var i in res.data)
//     {
//       console.log(res.data[i].name);
//       console.log(res.data[i].product_images);
//       console.log(res.data[i].link);
//       console.log(res.data[i].product_category_id);
//        this.cat.data.catName.push(res.data[i].name);
//        this.cat.data.catImg.push(res.data[i].product_images);
//        this.cat.data.catLink.push(res.data[i].link);
//        this.cat.data.catPid.push(res.data[i].product_category_id);
//       //
//
// }
console.log(this.cat);




// this.catName=JSON.stringify(res);

  });
  // console.log(this.cat.catPid[0])
  }

  ionViewDidLoad() {
    console.log('Hello ProductPage Page');
  }

}
