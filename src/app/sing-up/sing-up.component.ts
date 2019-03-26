import { Component, OnInit } from '@angular/core';
import {UserReg} from './sing-up';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  public userReg: UserReg;
  
  constructor() { }

  ngOnInit() {
    this.userReg = {
      name: "",
      email: "",
      password: "",
    }
  }

}
