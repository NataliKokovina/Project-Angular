import { Pipe, PipeTransform} from '@angular/core';

@Pipe(
  {
    name: 'search'
  }
)

export class SearchPipe implements PipeTransform {

  transform(apartments, value) {
    return apartments.filter(apartment => {
      return apartment.name.includes(value)
    })
  }
}
