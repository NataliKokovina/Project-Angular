import { Pipe, PipeTransform} from '@angular/core';

@Pipe(
  {
    name: 'rent'
  }
)

export class FilterRentPipe implements PipeTransform {

    transform(apartments, value) {
      return apartments.filter(apartment => {
        return apartment.rentType.includes(value)
      })

  }



}
