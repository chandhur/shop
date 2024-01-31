import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TaskFromComponent } from './task-from/task-from.component';
import { TaskBodyComponent } from './task-body/task-body.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent,
    TodoListComponent,
    TaskFromComponent,
    TaskBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
