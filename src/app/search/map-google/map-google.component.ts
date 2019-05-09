import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Apartments } from '../list-of-apartments/apartments';


@Component({
  selector: 'app-map-google',
  templateUrl: './map-google.component.html',
  styleUrls: ['./map-google.component.css'],
  providers: [HttpService]
})
export class MapGoogleComponent implements OnInit {
  lat: number = 50.455046;
  lng: number = 30.521289;
  zoom: number = 12;
  apartments: Apartments[]=[];

  constructor(private httpService: HttpService) { }


  ngOnInit() {

    // this.httpService.getApartment().subscribe(data => this.apartments=data["apartmentList"]);
    // this.getApartment();
      this.getApartments();
  }

  getApartments(): void {
    this.httpService.getApartments().subscribe(apartments => this.apartments = apartments)
  }

}
