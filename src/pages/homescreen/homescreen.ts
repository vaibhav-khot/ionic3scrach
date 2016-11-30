import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Homescreen page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-homescreen',
  templateUrl: 'homescreen.html'
})
export class HomescreenPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HomescreenPage Page');
  }

}
