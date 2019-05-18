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

  // users: User[]=[];

  constructor(private route: ActivatedRoute){}
  // private someFunction(){
  //    this.route.paramMap
  //    .subscribe((params: ParamMap) =>{
  //         console.log(params.get('city'))
  //       });
  // }
  ngOnInit() {
  //   this.httpService.getUsers().subscribe(data => this.users=data);
  this.route.paramMap
  .subscribe((params: ParamMap) =>{
       console.log(params.get('city'))
       this.city = params.get('city');
       console.log(this.city);
     });
  }

  public searchApartment({name: name}){
    this.nameOfSearchApart = name;
    // console.log(this.nameOfSearchApart);
    return this.nameOfSearchApart
  }

  public filtersForApartment({typeF: typeF, rentF: rentF}){
    this.typeF = typeF;
    this.rentF = rentF;
    return this.typeF, this.rentF
  }


}
