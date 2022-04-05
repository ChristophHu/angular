import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(input: any, byProperty: string): any {
    console.log(input)
    if (Array.isArray(input) && input.length > 1) {
      input.sort((a, b) => (a[byProperty] < b[byProperty] ? -1 : 1))
      return input
    }
    return input
  }
}
