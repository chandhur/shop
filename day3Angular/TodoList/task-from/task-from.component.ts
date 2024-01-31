import { Component ,Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-from',
  templateUrl: './task-from.component.html',
  styleUrl: './task-from.component.css'
})
export class TaskFromComponent implements OnInit {

  @Input() tasks:any;

  constructor(){}

  newTasks:string ="";

  addToDo()
  {
      this.tasks.unshift(this.newTasks)
      localStorage.setItem("myTask",JSON.stringify(this.tasks));
      this.newTasks=""
  }

   ngOnInit(): void {
     
   }

}
