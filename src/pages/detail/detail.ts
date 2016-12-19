import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController,LoadingController ,Events } from 'ionic-angular';
import { Api } from '../../providers/api';

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
cartitem:any;
// myRating:number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl : AlertController,
    public api : Api,
    public loadingCtrl: LoadingController,
    public events : Events

)
    {
    console.log("details page constructor");
    var product=this.navParams.get('product');
    var item=this.navParams.get('item');
    console.log(product);
    this.product=product;
    // this.myRating=product.rating;
    this.cartitem=item;

    this.productSlide={
    initialSlide: 1,
    loop: true
    }

    this.api.loadCart().then(res=>{

        console.log("Load Cart Successfully");
        console.log(res.count);

      })
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
            // alert("Goto Quntity Api");
            console.log(this.product.id+"()()"+data.Quantity);
            this.api.addCart(this.product.id,data.Quantity).then(res=>{
              console.log(res);
              // this.events.publish(res.total_carts);
              this.api.addCartEvent(res.total_carts);
              let loader = this.loadingCtrl.create({
                content: res.message,
                duration: 3000
              })
              loader.present();
              loader.onDidDismiss(()=>{
                this.api.events.subscribe("CartAdded",items=>{
                  console.log(items);
                  this.cartitem=items;
                })

              })
            })
          }

          }
        }
      ]
    });
    prompt.present();
    console.log(id);
  }

//   doRefresh(refresher) {
//
//     console.log('Begin async operation', refresher);
//
//     setTimeout(() => {
//       console.log('Async operation has ended');
//       refresher.complete();
//     }, 2000);
//
// }
  ionViewDidLoad() {
    console.log('Hello DetailPage Page');
  }

}
