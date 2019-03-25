import { Component, OnInit } from '@angular/core';
import {User} from './sing-in';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  public user: User;

  constructor() { }

  ngOnInit() {
    this.user = {
      email: "",
      password: "",
    }
  }

}
