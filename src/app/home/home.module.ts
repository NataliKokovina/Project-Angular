import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MiniCalendarModule } from 'mini-calendar';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormComponent } from './form/form.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    MiniCalendarModule,
    ClickOutsideModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [],
  exports: [FormComponent]
})
export class HomeModule { }

// MiniCalendarModule from https://www.npmjs.com/package/tslib
