import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';
import {CarsComponent} from './cars/cars.component';
import {BookingComponent} from './booking/booking.component';
import {ContactComponent} from './contact/contact.component';
const routes: Routes = [
{path:"",component:LoginComponent},
{path:"cars",component:CarsComponent},
{path:"booking",component:BookingComponent},
{path:"contact",component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
