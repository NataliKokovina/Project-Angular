import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Apartments } from './apartments';


@Component({
  selector: 'app-list-of-apartments',
  templateUrl: './list-of-apartments.component.html',
  styleUrls: ['./list-of-apartments.component.css'],
  providers: [HttpService]
})
export class ListOfApartmentsComponent implements OnInit {
  @Input() public searchApart: string;
  @Input() public filterType: string;
  @Input() public filteRent: string;

  apartments: Apartments[]=[];
  selectedApartament: Apartments;
  hasApp: boolean = false;
  filtersName = "";
  // filterType = "";


  constructor(private httpService: HttpService) { }



  ngOnInit() {
    if(this.searchApart == undefined){
      this.searchApart = "";
    }

    if(this.filterType == undefined){
      this.filterType = "";
    }

    if(this.filteRent == undefined){
      this.filteRent = "";
    }


    // this.httpService.getApartment().subscribe(data => this.apartments=data["apartmentList"]);
    // this.getApartment();

      this.getApartments();

  }

  // display(){
  //   this.filtersName = this.searchApart;
  //   console.log(this.filtersName);
  // }

  getApartments(): void {
    this.httpService.getApartments().subscribe(apartments => this.apartments = apartments);
  }



  // onChoseLocation(event){
  //   console.log(event);
  // }

  // getApartment(): void {
  //   this.httpService.getApartment()
  //   .subscribe(apartments => this.apartments = apartments["apartmentList"].slice(0,5));
  // }
}
