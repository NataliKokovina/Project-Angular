import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RentMyApartmentComponent } from './rent-my-apartment/rent-my-apartment.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { SearchComponent } from './search/search.component';
import { HomeModule } from './home/home.module';
import { MiniCalendarModule } from 'mini-calendar';
import { ClickOutsideModule } from 'ng-click-outside';


@NgModule({
  declarations: [
    AppComponent,
    RentMyApartmentComponent,
    HomeComponent,
    HeaderComponent,
    SingInComponent,
    SingUpComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    MiniCalendarModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, RentMyApartmentComponent, HomeComponent]
})
export class AppModule { }
