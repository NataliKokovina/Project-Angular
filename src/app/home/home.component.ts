import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { SearchService } from '../home/home-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Output() searchInf = new EventEmitter<{city: any, start: any, last: any, people: any}>();
  city: string
  start: any
  last:any
  people:number


  constructor() {

  }

  searchDate({city: city, start: start, last: last, people: people}){
    this.city = city;
    this.start = start;
    this.last =last;
    this.people = people;
    // console.log(city);
    // console.log(start);
    // console.log(last);
    // console.log(people);
    this.searchInf.emit({city: this.city, start: this.start, last: this.last, people:this.last})
  }

  ngOnInit() {

}



}
