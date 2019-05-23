import { Pipe, PipeTransform} from '@angular/core';

@Pipe(
  {
    name: 'city',
  }
)

export class CityPipe implements PipeTransform {

  transform(apartments, value) {
    return apartments.filter(apartment => {
      return apartment.adress.city.includes(value)
    })
  }

}
