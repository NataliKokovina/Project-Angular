import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MiniCalendarModule } from 'mini-calendar';
import { ClickOutsideModule } from 'ng-click-outside';

// import { CityComponent } from 'src/app/city/city.component'
// import { HomeComponent } from 'src/app/home/home.component';
// import { HomeServiceService } from './home-service.service';
// import { City } from '../home/home';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MiniCalendarModule,
    ClickOutsideModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }

// MiniCalendarModule from https://www.npmjs.com/package/tslib
