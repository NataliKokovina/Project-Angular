import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpService } from '../http.service';
import { Apartments } from '../list-of-apartments/apartments'

@Component({
  selector: 'app-apartament-inf',
  templateUrl: './apartament-inf.component.html',
  styleUrls: ['./apartament-inf.component.css'],
  providers: [HttpService]
})
export class ApartamentInfComponent implements OnInit {
  apartament: Apartments[] =[];

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private location: Location) { }

  ngOnInit(){
    // this.getApart();
  }

  // getApart(): void{
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.httpService.getApart(id).subscribe(apartament => this.apartament = apartament);
  // }

  goBack(): void {
    this.location.back();
  }
}
