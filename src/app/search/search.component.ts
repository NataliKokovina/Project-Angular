import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { HttpService} from './http.service';

import {User} from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [HttpService]
})
export class SearchComponent implements OnInit {
  nameOfSearchApart: string;
  typeF = "";
  rentF = "";
  city = "";


  constructor(private route: ActivatedRoute){}

  ngOnInit() {
  this.route.paramMap
  .subscribe((params: ParamMap) =>{
       console.log(params.get('city'))
       this.city = params.get('city');
       console.log(this.city);
     });
  }

  public searchApartment({name: name}){
    this.nameOfSearchApart = name;
    return this.nameOfSearchApart
  }

  public filtersForApartment({typeF: typeF, rentF: rentF}){
    this.typeF = typeF;
    this.rentF = rentF;
    return this.typeF, this.rentF
  }


}
