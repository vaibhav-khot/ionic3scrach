import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController,LoadingController ,Events} from 'ionic-angular';
import { Api } from '../../providers/api';
import { CartPage } from '../cart/cart';


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
current_image:string="";
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
    this.current_image=product.product_images[0].image;
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

      this.api.events.subscribe("CartAdded",items=>{
        console.log(items);
        this.cartitem=items;


      })


  }
  quantity(id){
    let prompt = this.alertCtrl.create({
      title: this.product.name,
      message: `<div style='text-align : center;'>
                <img src=`+this.product.product_images[0].image+`  height='142' width='142'>"
                <div>Enter Quantity</div></div>`,
      inputs: [
        {
          name: 'Quantity',
          placeholder: 'Quantity'
        }
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


            })
          }

          }
        }
      ],
      cssClass:"imageclass"
    });
    prompt.present();
    console.log(id);
  }

  viewImage(image){
    this.current_image=image;


  }
  openCart(){
    this.api.loadCart().then(res=>{
       this.navCtrl.push(CartPage,{
         cart : res
       })
    })
   
  }

  ionViewDidLoad() {
    console.log('Hello DetailPage Page');
  }

}
