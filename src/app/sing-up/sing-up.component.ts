import { Component, OnInit } from '@angular/core';
import {UserReg} from './sing-up';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  public userReg: UserReg;
  fileData: any;

  constructor(private myHttp: HttpClient) { }

  ngOnInit() {
    this.userReg = {
      name: "",
      email: "",
      // password: "",
      tel: "+380",
    }

}

public httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

public submited(){


  return this.myHttp.post('http://localhost:3001/users/registrations', this.userReg, this.httpOptions).subscribe(
    (reslt) => {console.log(this.fileData = reslt)}
    );
}
}

// options: {header('Access-Control-Allow-Origin: *')}
