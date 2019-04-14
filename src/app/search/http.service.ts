import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable(
  {
  providedIn: 'root'
}
)
export class HttpService {

  constructor(private http: HttpClient){ }

  getApartment() {
    return this.http.get('assets/apartments.json')

  }
}
