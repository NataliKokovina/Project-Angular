import { Component, OnInit } from '@angular/core';
import { Apartments } from '../search/list-of-apartments/apartments';
import { HttpService} from '../search/http.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {

  selectedApartament: Apartments;
  apartaments: Apartments[];

  constructor(private httpServise: HttpService) { }

  ngOnInit() {

  }

  onSelect(apartament: Apartments): void {
    this.selectedApartament = apartament;
  }
}
