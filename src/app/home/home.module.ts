import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniCalendarModule } from 'mini-calendar';
import { ClickOutsideModule } from 'ng-click-outside';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MiniCalendarModule,
    ClickOutsideModule
  ],
  bootstrap: []
})
export class HomeModule { }

// MiniCalendarModule from https://www.npmjs.com/package/tslib
