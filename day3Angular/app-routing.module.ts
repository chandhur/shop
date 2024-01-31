import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarrerComponent } from './carrer/carrer.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ErrorComponent } from './error/error.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path:"home",component:HomeComponent},
 {path:"carrer",component:CarrerComponent,
  children:[
    {path:"edit",component:EditComponent},
    {path:"add",component:AddComponent},
    {path:"form",component:FormComponent}
   ]},
  {path:"form",component:FormComponent},
  {path:"**",component:ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
