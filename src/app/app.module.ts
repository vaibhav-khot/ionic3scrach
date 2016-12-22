import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { BasePage } from '../pages/base/base';
import { HomescreenPage } from '../pages/homescreen/homescreen';
import { ProductBasePage } from '../pages/productbase/productbase';
import { ProductPage} from '../pages/product/product';
import { ListPage} from '../pages/list/list';
import { DetailPage} from '../pages/detail/detail';
import { CartPage} from '../pages/cart/cart';
// import { Default } from './default';

import { Loginservice } from '../providers/loginservice';
import { Httpservice } from '../providers/httpservice';
import { Shareservice } from '../providers/shareservice';
import { Api } from '../providers/api';


import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    BasePage,
    LoginPage,
    HomescreenPage,
    ProductBasePage,
    ProductPage,
    ListPage,
    DetailPage,
    CartPage
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
    ProductBasePage,
    ProductPage,
    ListPage,
    DetailPage,
    CartPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  Loginservice,Httpservice,Api,Shareservice
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
