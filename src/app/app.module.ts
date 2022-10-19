import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddReciepeComponent } from './add-reciepe/add-reciepe.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllReciepeComponent } from './view-all-reciepe/view-all-reciepe.component';
import { HttpClientModule } from '@angular/common/http';
import { FormControl } from '@angular/forms';

const appRoutes:Routes=[
  {
    path:"",component:AddReciepeComponent
  },
  {
    path:"viewReciepe",component:ViewAllReciepeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddReciepeComponent,
    ViewAllReciepeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
