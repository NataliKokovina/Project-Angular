import { Component, OnInit } from '@angular/core';
import { Search } from '../search';
import { CalendarComponent } from '../../calendar/calendar.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
    this.search = {
      city: "Київ",
      people: this.sumOfPeople,
      dateStart: new Date(),
      dateLast: new Date(),
    }
    console.log(this.search);
  }
  public submited(){
    this.formSubmited = true;
    // todo: прописать логику отправки данных
  }

  // todo: прописать логику передачи выбранной даты
}
