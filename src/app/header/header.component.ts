import { Component, OnInit, ViewChild } from '@angular/core';
import {FormComponent} from '../home/form/form.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(FormComponent)
  private forSearch: FormComponent;
  // paramsForSearch: object;

  constructor() { }

  ngOnInit() {

    console.log(this.forSearch.search);
  }

}
