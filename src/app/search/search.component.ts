import { Component, OnInit } from '@angular/core';
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

  // users: User[]=[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  //   this.httpService.getUsers().subscribe(data => this.users=data);
  }

  public searchApartment({name: name}){
    this.nameOfSearchApart = name;
    // console.log(this.nameOfSearchApart);
    return this.nameOfSearchApart
  }
}
