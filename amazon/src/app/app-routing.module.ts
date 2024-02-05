import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContainerComponent } from './container/container.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CartComponent } from './cart/cart.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
{
  path:"",
  component:SignUpComponent
},
{
  path:'home',
  component:ContainerComponent
},
{
  path:"other",
  component:ViewProductComponent
},
{
  path:"cart",
  component:CartComponent
},{
  path:"feedback",
  component:FeedBackComponent
},{
  path:"payment",
  component:PaymentComponent
},{
  path:"signup",
  component:LoginPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
