import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {routing} from './app.routing';

import {LoginService } from './service/login.service';
import {AddBookService} from './service/add-book.service';

import { trigger, style, transition, animate, group } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import "hammerjs";


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdIconModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [LoginService,AddBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
