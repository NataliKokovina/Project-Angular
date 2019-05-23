import { Pipe, PipeTransform} from '@angular/core';

@Pipe(
  {
    name: 'place'
  }
)

export class FilterPlacePipe implements PipeTransform {

    transform(apartments, value) {
      return apartments.filter(apartment => {
        return apartment.placeType.includes(value)
      })

  }



}
