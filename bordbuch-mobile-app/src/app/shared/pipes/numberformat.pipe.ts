import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberformat'
})
export class NumberFormatPipe implements PipeTransform {

  // transform(data: number | undefined) {
  //   if (typeof(data) == 'number') {
  //     return data
  //   } else {
  //     return ''
  //   }
  // }
  transform(n: string) {
    return 'Test'
  }
}
