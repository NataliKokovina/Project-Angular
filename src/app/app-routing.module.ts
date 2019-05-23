import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RentMyApartmentComponent } from './rent-my-apartment/rent-my-apartment.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { SearchComponent } from './search/search.component';
import {ApartamentInfComponent} from './search/apartament-inf/apartament-inf.component'
import { Profile } from 'selenium-webdriver/firefox';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'rent-my-apartment', component: RentMyApartmentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'sing-in', component: SingInComponent },
  { path: 'sing-up', component: SingUpComponent },
  { path: 'search', component: SearchComponent },
  { path: 'detail/:id', component: ApartamentInfComponent},
  { path: 'profile', component: ProfileComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],

})
export class AppRoutingModule { }


