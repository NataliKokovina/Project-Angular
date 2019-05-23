import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FilterList} from '../list-of-parameters/filter-list';
import { HttpService } from '../http.service';
import {Apartments} from '../list-of-apartments/apartments';

@Component({
  selector: 'app-list-of-parameters',
  templateUrl: './list-of-parameters.component.html',
  styleUrls: ['./list-of-parameters.component.css'],
  providers: [HttpService]
})
export class ListOfParametersComponent implements OnInit {
  @Output() filters = new EventEmitter<{typeF: string, rentF: string}>();

  apartments: Apartments[]=[];
  placeType: number
  typeF = "";
  rentF = "";


  constructor(private httpService: HttpService) { }


  searchList(){
    setTimeout(() => {
      this.typeF;
      this.filters.emit({typeF: this.typeF, rentF: this.rentF })
    }, 100)
  }

  ngOnInit() {
    this.getApartments();
  }

  getApartments(): void {
    this.httpService.getApartments().subscribe(apartments => this.apartments = apartments);
  }



}
