import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { BasePage } from '../pages/base/base';
import { HomescreenPage } from '../pages/homescreen/homescreen';
import { ProductPage } from '../pages/product/product';
import { Loginservice } from '../providers/loginservice';
import { Httpservice } from '../providers/httpservice';

import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    BasePage,
    LoginPage,
    HomescreenPage,
    ProductPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    BasePage,
    HomescreenPage,
    ProductPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  Loginservice,Httpservice
  // {
  //     provide: Httpservice,
  //     useClass: (_backend: XHRBackend, _defaultOptions: RequestOptions) => {
  //       return new Httpservice(_backend, _defaultOptions);
  //     },
  //     deps: [XHRBackend, RequestOptions]
  //   }

]
})
export class AppModule {}
