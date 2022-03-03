import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(input: any): any {
    if (Array.isArray(input)) {
      input.sort((a, b) => (a.name < b.name ? -1 : 1))
      return input
    }
    return input
  }

  isObject(value: any): boolean {
    return value !== null && typeof value === 'object'
  }

}
