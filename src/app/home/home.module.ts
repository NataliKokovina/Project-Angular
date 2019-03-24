import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormComponent } from './form/form.component';
import { FormsModule} from '@angular/forms';
import { CalendarModule} from './form/calendar/calendar.module'
import { from } from 'rxjs';


@NgModule({
  declarations: [FormComponent],
  imports: [
    // ReactiveFormsModule,
    CommonModule,
    ClickOutsideModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [FormComponent]
})
export class HomeModule { }

// MiniCalendarModule from https://www.npmjs.com/package/tslib
