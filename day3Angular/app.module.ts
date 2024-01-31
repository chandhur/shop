import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarrerComponent } from './carrer/carrer.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { PopupComponent } from './popup/popup.component';
import { HeaderComponent } from './header/header.component';
import { BootStapPopUpComponent } from './boot-stap-pop-up/boot-stap-pop-up.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CarrerComponent,
    AddComponent,
    EditComponent,
    ErrorComponent,
    FormComponent,
    PopupComponent,
    HeaderComponent,
    BootStapPopUpComponent
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
