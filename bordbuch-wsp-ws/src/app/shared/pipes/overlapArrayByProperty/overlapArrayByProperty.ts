import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overlapArrayByProperty'
})
export class OverlapArrayByPropertyPipe implements PipeTransform {

  transform(input: any, byProperty: string, value: string[] = []): any {
    if (Array.isArray(input)) {
      let result = [...new Set(input)].filter(el => value.includes(el[byProperty]))
      return result
    }
    return input
  }
}
