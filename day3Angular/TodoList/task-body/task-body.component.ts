import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-task-body',
  templateUrl: './task-body.component.html',
  styleUrl: './task-body.component.css'
})
export class TaskBodyComponent implements OnInit {

  @Input() tasks:any;

   constructor(){}

  ngOnInit(): void {
    
  }

  remove(index:number){
    console.log(index)
    
    this.tasks.splice(index,1)


  }
}
