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

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // this.httpService.getApartment().subscribe(data => this.apartments=data["apartmentList"]);
    this.getApartment();
  }

  getApartment(): void {
    this.httpService.getApartment()
    .subscribe(apartments => this.apartments = apartments["apartmentList"].slice(0,5));
  }
}
