import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apartments } from './list-of-apartments/apartments';
import { APARTMENTS } from '../apartments/apartments-mock';
import { Observable, of } from 'rxjs';


@Injectable(
  {
  providedIn: 'root'
}
)
export class HttpService {
  // apartaments: Apartments[]

  constructor(private http: HttpClient){ }

  // getApartment() {
  //   return this.http.get('assets/apartments.json')

  // }

  getKey() {
    return this.http.get('assets/key.json')
  }

  getApartments():  Observable<Apartments[]> {
    return of(APARTMENTS);
  }

  getApart(id: number): Observable<Apartments> {
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`HttpService: fetched hero id=${id}`);
    return of(APARTMENTS.find(apartment => apartment.id === id));
  }
  // getApart() {
  //   return this.http.get('assets/apartments.json').find(apartaments => apartaments["apartmentList"].id === id)
  // }

}
