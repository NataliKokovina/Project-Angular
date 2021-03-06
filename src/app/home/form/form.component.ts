import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Search } from '../search';
import { Router } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  @Output() searchInf = new EventEmitter<{city: any, start: any, last: any, people: any}>();
  fileData: any;
  isMiniCalendar: boolean = false;
  activeOfPeople: boolean = false;
  clickOutsideCalendarEnabled: boolean = false;
  clickOutsideMumberOfPeopleEnabled: boolean = false;
  sumOfPeople: number = 1;
  dateStart: Date;
  dateFinish: Date;
  formSubmited: boolean = false;


  public search: Search;


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

  constructor(private myHttp: HttpClient, private router: Router) {}

  onStart({start: startDate, last: lastDate}){
    this.search['dateStart'] = startDate;
    this.search['dateLast'] = lastDate;
  }

  ngOnInit() {
     this.search = {
      city: "",
      people: this.sumOfPeople,
      dateStart: new Date(),
      dateLast: new Date(),
    }
    return this.search;

  }
  public submited(){

    this.formSubmited = true;

    // this.myHttp.post('postgres://igor:pass@localhost:5432/daikhatu', this.search).subscribe(
    //   (reslt) => {console.log(this.fileData = reslt)}
    //   );

    this.searchInf.emit({city: this.search.city, start: this.search.dateStart, last: this.search.dateLast, people:this.search.people})

    this.router.navigate(['/search', { city: this.search.city}])

    // todo: прописать логику отправки данных
  }

  // searchDate(){
  //   this.searchInf.emit({city: this.search.city, start: this.search.dateStart, last: this.search.dateLast, people:this.search.people})
  // };
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
