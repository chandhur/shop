import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as paypal from 'paypal-sdk'


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit  {

  price:any;

  amount=0;

  paymentRequest:google.payments.api.PaymentDataRequest ={

    apiVersion:2,
    apiVersionMinor:0,
    allowedPaymentMethods:[
      {
        type:"CARD",
        parameters:{
          allowedAuthMethods:['PAN_ONLY',"CRYPTOGRAM_3DS"],
          allowedCardNetworks:['AMEX','VISA','MASTERCARD']
        },
        tokenizationSpecification:{
          type:"PAYMENT_GATEWAY",
          parameters:{
            gateway:"example",
            gatewayMerchantId:"exampleGatewayMerchantId"
          }
        }
      
      
      },
    ],
    merchantInfo:{
      merchantId:'12345678901234567890',
      merchantName:"Demo Merchant"
    },
    transactionInfo:{
      totalPriceStatus:'FINAL',
      totalPriceLabel:'Total',
      totalPrice:'0.10',
      currencyCode:"EUR",
      countryCode:"BE"

    },
    callbackIntents:[
      "PAYMENT_AUTHORIZATION"
    ]

  }

  onLoadPaymentData=(
    event:Event
  ):void =>{

    const eventDeatil= event as CustomEvent<google.payments.api.PaymentData>
    console.log("load payment data",eventDeatil.detail)

  }

  // onPaymentDataAuthorized:google.payments.api.PaymentAuthorizationResult = (paymentData:any) =>{

  //   console.log(paymentData)

  //   return {
  //     transactionState:'SUCCESS'

  //   } 
    
  // }

  constructor(private router:Router){
    
       this.price =this.router.getCurrentNavigation()?.extras.state
  }





  ngOnInit(): void {

  }

 

}

