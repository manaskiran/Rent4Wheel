import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarsComponent } from './cars/cars.component';
import { BookingComponent } from './booking/booking.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarsComponent,
    BookingComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
