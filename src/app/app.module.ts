import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RentMyApartmentComponent } from './rent-my-apartment/rent-my-apartment.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { SearchComponent } from './search/search.component';
import { HomeModule } from './home/home.module';
import { ClickOutsideModule } from 'ng-click-outside';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { CalendarModule } from './home/form/calendar/calendar.module';
import { SingUpModule } from './sing-up/sing-up.module';
import { SingInModule } from './sing-in/sing-in.module';
import { ListOfApartmentsComponent } from './search/list-of-apartments/list-of-apartments.component';
import { ListOfParametersComponent } from './search/list-of-parameters/list-of-parameters.component';
import { ApartamentInfComponent } from './search/apartament-inf/apartament-inf.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RentMyApartmentComponent,
    SingInComponent,
    SingUpComponent,
    SearchComponent,
    HomeComponent,
    ListOfApartmentsComponent,
    ListOfParametersComponent,
    ApartamentInfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    HomeModule,
    ClickOutsideModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
    SingUpModule,
    SingInModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent, HeaderComponent, HomeComponent]
})
export class AppModule { }
