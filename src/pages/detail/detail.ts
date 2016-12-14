import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl : AlertController)
    {
    console.log("details page constructor");
    var product=this.navParams.get('product');
    console.log(product);
    this.product=product;
    // this.myRating=product.rating;

    this.productSlide={
    initialSlide: 1,
    loop: true
    }
  }
  quantity(id){
    let prompt = this.alertCtrl.create({
      title: this.product.name,
      message: "Enter Quntity",
      inputs: [
        {
          name: 'Quantity',
          placeholder: 'Quntity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add To Cart',
          handler: data => {
            console.log('Saved clicked');
           console.log(typeof(parseInt(data.Quantity)));
          //  if(parseInt(data.Quantity)=== NaN || parseInt(data.Quantity)===0){
          //     alert("please Enter Valid Quntity");
          //   console.log("please Enter Valid Quntity");
          //  }
          if(isNaN(parseInt(data.Quantity)) || parseInt(data.Quantity)===0){
            alert("please Enter Valid Quantity");
          }
          else {
            alert("Goto Quntity Api");
          }

          }
        }
      ]
    });
    prompt.present();
    console.log(id);
  }


  ionViewDidLoad() {
    console.log('Hello DetailPage Page');
  }

}
