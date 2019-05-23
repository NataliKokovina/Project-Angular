import { Component, OnInit } from '@angular/core';
import { Apartments } from '../search/list-of-apartments/apartments';
import { HttpService} from '../search/http.service';
import { APARTMENTS} from './apartments-mock';


@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {

  selectedApartament: Apartments;
  apartaments: Apartments [];
  // apartaments = APARTMENTS;

  constructor(private httpServise: HttpService) { }

  ngOnInit() {
    this.getApartments();
  }

  getApartments(): void {
    this.httpServise.getApartments().subscribe(apartaments => this.apartaments = apartaments);
  }


}
