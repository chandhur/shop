import { Component,OnInit,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit {

  @Input("show")
    show=false;

   @Output("close")
     onClose= new EventEmitter();

    @Input() item=""


  constructor(){}

  ngOnInit():void{

  }



}
