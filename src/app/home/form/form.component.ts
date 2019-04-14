import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Search } from '../search';
import { Router } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  isMiniCalendar: boolean = false;
  activeOfPeople: boolean = false;
  clickOutsideCalendarEnabled: boolean = false;
  clickOutsideMumberOfPeopleEnabled: boolean = false;
  sumOfPeople: number = 1;
  dateStart: Date;
  dateFinish: Date;
  formSubmited: boolean = false;

  public search: Search;

  // searchForm: FormGroup; AfterViewInit

  miniCalendar(){
    this.isMiniCalendar = !this.isMiniCalendar;
    this.clickOutsideCalendarEnabled = this.isMiniCalendar;
  }

  numberOfPeople(){
    this.activeOfPeople = !this.activeOfPeople;
    this.clickOutsideMumberOfPeopleEnabled = this.activeOfPeople;
  }

  onClickOutsideCalendar(){
      this.miniCalendar();
}

    onClickOutsideNumberOfPeople(){
      this.numberOfPeople();
  }

    addPeople(){
      if(this.sumOfPeople < 5){
         this.sumOfPeople++;
      } else {
        this.sumOfPeople;
      }
      return this.search['people'] = this.sumOfPeople;
  }

    reducePeople(){
      if(this.sumOfPeople >1){
        this.sumOfPeople--
      } else {
        this.sumOfPeople = 1;
      }
      return this.search['people'] = this.sumOfPeople;
  }

  // @ViewChild('calendar') calendar: any;
  constructor(private router: Router) {}

  onStart({start: startDate, last: lastDate}){
    this.search['dateStart'] = startDate;
    this.search['dateLast'] = lastDate;
  }

  ngOnInit() {

    // console.log(this.search);
    // this.initSearchForm();
    this.search = {
      city: "Київ",
      people: this.sumOfPeople,
      dateStart: new Date(),
      dateLast: new Date(),
    }
    // todo: передача city
  }
  public submited(){

    this.formSubmited = true;
    this.router.navigate(['/search'])


    // https://metanit.com/web/angular2/6.4.php
    // todo: прописать логику отправки данных
  }
  // initSearchForm() {
  //   this.searchForm = new FormGroup({
  //     city: new FormControl(),
  //   });
  //   this.city.setValue('asasasa');

  // }
  // get city() {
  //   return this.searchForm.get('city');
  // }
  // ngAfterViewInit(): void {
  //   this.calendar.log();
  // }
}
