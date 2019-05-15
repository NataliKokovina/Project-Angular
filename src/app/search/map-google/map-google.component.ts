import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { HttpService } from '../http.service';
import { Apartments } from '../list-of-apartments/apartments';


@Component({
  selector: 'app-map-google',
  templateUrl: './map-google.component.html',
  styleUrls: ['./map-google.component.css'],
  providers: [HttpService]
})
export class MapGoogleComponent implements OnInit {
  @Output() searchInfFromWindow = new EventEmitter<{name: string}>();
  lat: number = 50.455046;
  lng: number = 30.521289;
  zoom: number = 12;
  label: string;
  apartments: Apartments[]=[];
  searchName: string;

  constructor(private httpService: HttpService) { }


  ngOnInit() {

    // this.httpService.getApartment().subscribe(data => this.apartments=data["apartmentList"]);
    // this.getApartment();
      this.getApartments();
  }

  getApartments(): void {
    this.httpService.getApartments().subscribe(apartments => this.apartments = apartments)
  }

  onMouseOver(infoWindow, gm) {

    if (gm.lastOpen != null) {
        gm.lastOpen.close();
    }

    gm.lastOpen = infoWindow;

    infoWindow.open();


}

onClickInfoView(name: string){
  // console.log(name);
  this.searchName = name;
  this.searchInfFromWindow.emit({name: this.searchName})

}


}
