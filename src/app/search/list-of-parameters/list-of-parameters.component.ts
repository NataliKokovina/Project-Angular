import { Component, OnInit } from '@angular/core';
import {FilterList} from '../list-of-parameters/filter-list';

@Component({
  selector: 'app-list-of-parameters',
  templateUrl: './list-of-parameters.component.html',
  styleUrls: ['./list-of-parameters.component.css']
})
export class ListOfParametersComponent implements OnInit {
  public filters: FilterList

  constructor() { }

  ngOnInit() {
    // this.filters = {
      // name: '',

    // }
  }

}
