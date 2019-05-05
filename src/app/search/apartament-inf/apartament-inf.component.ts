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
  kitchenPlate: boolean;
  kitchenOven: boolean;
  kitchenDishwasher: boolean;
  kitchenMicrowave: boolean;
  kitchenWashingMachine: boolean;
  amenitiesEssentialThings: boolean;
  amenitiesInternet: boolean;
  amenitiesTv: boolean;
  amenitiesHeating: boolean;
  amenitiesWorkplace: boolean;
  phoneNumberShow: boolean = false;
  fireplace: boolean;
  balcony: boolean;
  parkingPlace: boolean;
  smokeDetector: boolean;
  forBoyOnly: boolean;
  forGirlOnly: boolean;
  forFamilyOnly: boolean;
  withoutChildren: boolean;
  notForStudents: boolean;
  withoutPets: boolean;
  notForSmokingPeople: boolean;
  notForForeigners: boolean;
  toilet: boolean;
  yardToilet: boolean;
  shower: boolean;
  jacuzzi: boolean;
  pool: boolean;


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
    this.kitchenOven = this.apartment.kitchenAppliances.oven;
    this.kitchenPlate = this.apartment.kitchenAppliances.plate;
    this.kitchenDishwasher = this.apartment.kitchenAppliances.dishwasher;
    this.kitchenMicrowave = this.apartment.kitchenAppliances.microwave;
    this.kitchenWashingMachine = this.apartment.kitchenAppliances.washingMachine;
    this.amenitiesEssentialThings = this.apartment.amenities.essentialThings;
    this.amenitiesInternet = this.apartment.amenities.internet;
    this.amenitiesTv = this.apartment.amenities.tv;
    this.amenitiesHeating = this.apartment.amenities.heating;
    this.amenitiesWorkplace = this.apartment.amenities.workplace;
    this.fireplace = this.apartment.amenities.fireplace;
    this.balcony = this.apartment.amenities.balcony;
    this.parkingPlace = this.apartment.amenities.parkingPlace;
    this.smokeDetector = this.apartment.amenities.smokeDetector;
    this.forBoyOnly = this.apartment.limitation.forBoyOnly;
    this.forGirlOnly = this.apartment.limitation.forGirlOnly;
    this.forFamilyOnly = this.apartment.limitation.forFamilyOnly;
    this.withoutChildren = this.apartment.limitation.withoutChildren;
    this.notForStudents = this.apartment.limitation.notForStudents;
    this.withoutPets = this.apartment.limitation.withoutPets;
    this.notForSmokingPeople = this.apartment.limitation.notForSmokingPeople;
    this.notForForeigners = this.apartment.limitation.notForForeigners;
    this.toilet = this.apartment.bath.toilet;
    this.yardToilet = this.apartment.bath.yardToilet;
    this.shower = this.apartment.bath.shower;
    this.jacuzzi = this.apartment.bath.jacuzzi;
    this.pool = this.apartment.bath.pool;
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
    // console.log(this.imgApart);
    return this.imgApart;
  }

  imgApartmentBefore(){
    if(this.imgApart>1){
      this.imgApart--
    } else{
      this.imgApart = 4;
    }
    // console.log(this.imgApart);
    return this.imgApart;
  }

  phoneNumber(){
    this.phoneNumberShow = !this.phoneNumberShow;
  }
}
