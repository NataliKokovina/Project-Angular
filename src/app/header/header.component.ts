import { Component, OnInit, ViewChild } from '@angular/core';
import {FormComponent} from '../home/form/form.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  city: string
  start: any
  last:any
  people:number

  // private forSearch: FormComponent["search"];

  constructor() { }



  // searchDate({city: city, start: start, last: last, people: people}){
  //   this.city = city;
  //   console.log(city);
  //   console.log(start);
  //   console.log(last);
  //   console.log(people);
  // }

  ngOnInit() {

    // console.log(this.city);
  }
}
