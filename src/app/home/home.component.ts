import { Component, OnInit} from '@angular/core';
import { SearchService } from '../home/home-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private cities: SearchService) {

  }
  ngOnInit() {
}
}
