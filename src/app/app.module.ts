import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddReciepeComponent } from './add-reciepe/add-reciepe.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {
    path:"",component:AddReciepeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddReciepeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
