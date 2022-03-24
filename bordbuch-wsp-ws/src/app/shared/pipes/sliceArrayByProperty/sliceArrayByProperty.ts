import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceArrayByProperty'
})
export class SliceArrayByPropertyPipe implements PipeTransform {

  transform(input: any, byProperty: string = 'bezeichnung', value: string = ''): any {
    if (Array.isArray(input)) {
      let result = input.filter(el => el[byProperty] != value)
      return result
    }
    return input
  }
}
