import { Component, OnInit } from '@angular/core';
import { Search } from '../search';
import { toDate } from '@angular/common/src/i18n/format_date';
import { MiniCalendarComponent } from 'mini-calendar';



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

  public search: Search;
  public calendar: MiniCalendarComponent;

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
        return this.sumOfPeople++;
      } else {
        return this.sumOfPeople;
      }
  }

    reducePeople(){
      if(this.sumOfPeople >1){
        this.sumOfPeople--
      } else {
        this.sumOfPeople = 1;
      }
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

}
