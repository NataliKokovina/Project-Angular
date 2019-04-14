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

  // users: User[]=[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  //   this.httpService.getUsers().subscribe(data => this.users=data);
  }

}
