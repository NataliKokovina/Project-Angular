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
import { MiniCalendarModule } from 'mini-calendar';
import { ClickOutsideModule } from 'ng-click-outside';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
// import { CityComponent } from './city/city.component';
// import { DropdownListModule } from 'ngx-dropdown-list';
// import { DropdownModule} from '/home/natali/git_dev/Angular/Project-Angular/node_modules/angular-dropdown-component';
// import { HomeServiceService } from './home/home-service.service';
// import { City } from './home/home';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RentMyApartmentComponent,
    SingInComponent,
    SingUpComponent,
    SearchComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    MiniCalendarModule,
    ClickOutsideModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent, HeaderComponent, RentMyApartmentComponent, HomeComponent]
})
export class AppModule { }
