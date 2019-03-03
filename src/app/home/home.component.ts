import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMiniCalendar: boolean = false;
  activeOfPeople: boolean = false;


  constructor() {

  }
  miniCalendar(){
    this.isMiniCalendar = !this.isMiniCalendar;
  }

  onClickOutsideCalendar(){
    if(this.isMiniCalendar == true){
      this.isMiniCalendar = !this.isMiniCalendar;
    }
    // if(this.activeOfPeople == true){
    //   this.activeOfPeople = !this.activeOfPeople;
    // }
  }

  onClickOutsidePeople(){
    if(this.activeOfPeople == true){
      this.activeOfPeople = !this.activeOfPeople;
    }
  }

  numberOfPeople(){
    this.activeOfPeople = !this.activeOfPeople;
  }

  ngOnInit() {
  }

}
