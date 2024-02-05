import { Component ,OnInit} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-silder-image',
  templateUrl: './silder-image.component.html',
  styleUrl: './silder-image.component.css'
})
export class SilderImageComponent implements OnInit {

  images =[
       "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/Launches24/OnePlus/Buds3/Launch/D112818071_WLD_OnePlus_Vitamin_NewLaunch_tallhero_1500x600._CB584958658_.jpg",
       "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/jan2024/Bau/Unrec/Citi/Shoes/Frame_386_3000pc._CB584585056_.jpg",
       "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/SVD/Feb24/GW/Unrec_PC_3000._CB583595285_.jpg",
       "https://images-eu.ssl-images-amazon.com/images/G/31/Img22/Headphone/CE/32/Under_1499_Tallhero_3000x1200._CB583388552_.jpg",
       "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg"
  ]

  currentIndex=0;

  ngOnInit():void{

    // interval(3000).subscribe(()=>this.nextSlide())

  }

  
  nextSlide(){

    this.currentIndex =(this.currentIndex+1)%this.images.length;

  }



}
