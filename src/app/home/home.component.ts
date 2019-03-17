import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
// import { City } from 'src/app/city/city.module';
// import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
// import { EMPTY } from 'rxjs';
// import { FormControl } from '@angular/forms';
// import { HttpService} from './http.service';
// import { HomeServiceService } from '../home/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


  isMiniCalendar: boolean = false;
  activeOfPeople: boolean = false;
  clickOutsideCalendarEnabled: boolean = false;
  clickOutsideMumberOfPeopleEnabled: boolean = false;
  sumOfPeople: number = 1;

  // // Контрол для поиска города
  // findControl = new FormControl();
  // // Ошибка поиска
  // error: boolean = false;
  // // Найденный город
  // city: City = null;


  // constructor(private cities: HomeServiceService) {

  // }



  miniCalendar(){
    this.isMiniCalendar = !this.isMiniCalendar;
    this.clickOutsideCalendarEnabled = this.isMiniCalendar;
  }

  numberOfPeople(){
    this.activeOfPeople = !this.activeOfPeople;
    this.clickOutsideMumberOfPeopleEnabled = this.activeOfPeople;
  }

  onClickOutsideCalendar(){
      this.miniCalendar();
}

    onClickOutsideNumberOfPeople(){
      this.numberOfPeople();
  }

    addPeople(){
      if(this.sumOfPeople < 5){
        return this.sumOfPeople++;
      } else {
        return this.sumOfPeople;
      }
  }

    reducePeople(){
      if(this.sumOfPeople >1){
        this.sumOfPeople--
      } else {
        this.sumOfPeople = 1;
      }
  }

  ngOnInit() {
//     let n = this.findControl.valueChanges
//     .pipe(
//       // Фильтруем если введено меньше двух символов
//       filter(value => value.length > 2),

//       // Ставим задержку одну секунду
//       debounceTime(1000),
//       // Запрашиваем данные пользователя
//       switchMap(value =>
//         this.cities.getCity(value).pipe(
//           // Обработка ошибок
//           catchError(err => {
//             this.city = null;
//             this.error = true;
//             return EMPTY;
//           })
//     )
//     )
//     )
//     // Получение данных
//     .subscribe(city => {
//       this.city = city;
//       this.error = false;
//   }



//     )


// console.log(n);

}
}
