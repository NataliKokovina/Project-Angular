import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import {Calendar} from './calendar';
import { validateConfig } from '@angular/router/src/config';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';

// interface IfDate{
//   selectionBegin: Date;
//   selectionEnd: Date;
// }

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Output() start = new EventEmitter<{start: any, last:any}>();
  // @Output() last: EventEmitter<any> = new EventEmitter();

  visible: boolean;
  calendar: Calendar;
  public selectionBegin: Date;
  selectionEnd: Date;
  ckickedLast: Date;
  ckickedEarlier: Date;

  constructor() {
    this.visible = false;
    this.calendar = new Calendar();
  }

  // @Output() beginDate = new EventEmitter<Date>();
  // beginDateSearch(day: Date) {
  //     this.beginDate.emit(day);
  // }

  ngOnInit() {
  }
  onCkick(date: Date) {
    if (!this.selectionBegin) {
      this.ckickedLast = new Date(date);
      this.selectionBegin = new Date(date);
      return this.selectionBegin;
    }
    this.ckickedEarlier = this.ckickedLast;
    this.ckickedLast = new Date(date);
    if (this.ckickedEarlier > this.ckickedLast) {
      this.selectionBegin = this.ckickedLast;
      this.selectionEnd = this.ckickedEarlier;
      return this.selectionBegin, this.selectionEnd;
    } else {
      this.selectionBegin = this.ckickedEarlier;
      this.selectionEnd = this.ckickedLast;
      return this.selectionBegin, this.selectionEnd;
    }

  }
  isSelectedDate(day: Date): boolean {
    if (this.selectionBegin) {
      if (this.selectionEnd) {
        if (day >= this.selectionBegin && day <= this.selectionEnd) {
          return true;
        }
      } else {
        if (day.getTime() === this.selectionBegin.getTime()) {
          return true;
        }
      }
    }
    return false;
  }
  isClickedLast(date: Date): boolean {
    if (this.ckickedLast) {
      return date.getTime() === this.ckickedLast.getTime();
    } else {
      return false;
    }
  }
  toggleCalendar(): void {
    this.visible = !this.visible;
  }

  searchDate(){
    this.start.emit({start: this.selectionBegin, last: this.selectionEnd});
  }
  log() {
    console.log('log sdsdsdsdsdsdsdsdsd');
  }

  // searchDateLast(){
  //   this.start.emit(this.selectionEnd);
  // }

}

