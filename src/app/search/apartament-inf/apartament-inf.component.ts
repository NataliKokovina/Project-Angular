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
  apartment: Apartments;
  imgApart: number = 1;


  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private location: Location) { }

  ngOnInit(){
    this.getApart();
  }

  getApart(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.httpService.getApart(id).subscribe(apartment => this.apartment = apartment);
  }

  goBack(): void {
    this.location.back();
  }

  // imgApartment(photo: string): void{
  //   this.imgApart = photo;
  //   console.log(photo);
  // }

  imgApartmentAfter() {
    if(this.imgApart<4){
      this.imgApart++
    } else{
      this.imgApart = 1;
    }
    console.log(this.imgApart);
    return this.imgApart;
  }

  imgApartmentBefore(){
    if(this.imgApart>1){
      this.imgApart--
    } else{
      this.imgApart = 4;
    }
    console.log(this.imgApart);
    return this.imgApart;
  }
}
