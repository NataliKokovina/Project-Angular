import { Component, OnInit , Output, Input, EventEmitter} from '@angular/core';
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
  @Input() public searchApart: string;
  @Input() public filterType: string;
  @Input() public filteRent: string;
  @Input() public searchCity: string;
  lat: number;
  lng: number;
  zoom: number;
  label: string;
  apartments: Apartments[]=[];
  searchName: string;

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

      if(this.searchCity == "Київ"){
        this.lat = 50.449445;
        this.lng = 30.523380;
        this.zoom = 12;
      };

      if(this.searchCity == "Черкаси"){
        this.lat = 49.444194;
        this.lng = 32.058955;
        this.zoom = 14;
      };
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
  this.searchName = name;
  this.searchInfFromWindow.emit({name: this.searchName})

}


}
