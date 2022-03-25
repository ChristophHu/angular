import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overlapArrayByProperty'
})
export class OverlapArrayByPropertyPipe implements PipeTransform {

  transform(input: any, byProperty: string, value: string[] = []): any {
    if (Array.isArray(input)) {
      let result = [...new Set(input)].filter((x) => value.includes(x))
      console.log(result)
      return result
    }
    return input
  }
}
