import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToDate'
})
export class StringToDatePipe implements PipeTransform {

  transform(date: string | undefined) {
    dateFormat: Date
    if (typeof(date) == 'string') {
      return (new Date(date.replace(' ', 'T')))
    } else {
      return ''
    }
  }
}
