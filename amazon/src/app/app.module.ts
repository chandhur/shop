import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { SilderImageComponent } from './silder-image/silder-image.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { SharedService } from './shared/shared.service';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopUpComponent } from './pop-up/pop-up.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    NavbarComponent,
    ContainerComponent,
    SilderImageComponent,
    SearchBarComponent,
    ProductListComponent,
    ViewProductComponent,
    CartComponent,
    PaymentComponent,
    FeedBackComponent,
    PopUpComponent,
    LoginPageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    GooglePayButtonModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
