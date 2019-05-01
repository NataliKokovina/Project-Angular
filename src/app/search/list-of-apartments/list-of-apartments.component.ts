import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import {Apartments} from './apartments';


@Component({
  selector: 'app-list-of-apartments',
  templateUrl: './list-of-apartments.component.html',
  styleUrls: ['./list-of-apartments.component.css'],
  providers: [HttpService]
})
export class ListOfApartmentsComponent implements OnInit {

  apartments: Apartments[]=[];
  selectedApartament: Apartments;
  hasApp: boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // this.httpService.getApartment().subscribe(data => this.apartments=data["apartmentList"]);
    // this.getApartment();
      this.getApartments();
  }

  getApartments(): void {
    this.httpService.getApartments().subscribe(apartments => this.apartments = apartments.slice(0, 5));
  }

  onSelect(apartment: Apartments): void {
    this.selectedApartament = apartment;
  }


  // getApartment(): void {
  //   this.httpService.getApartment()
  //   .subscribe(apartments => this.apartments = apartments["apartmentList"].slice(0,5));
  // }
}
