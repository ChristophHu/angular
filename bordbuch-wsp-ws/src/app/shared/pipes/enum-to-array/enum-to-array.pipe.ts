import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enumToArray' })
export class EnumToArrayPipe implements PipeTransform {
  transform(value: any): Object {
    return Object.keys(value).filter(el => !isNaN(+el)).map(o => {return {index: +o, name: value[o]}})
  }
}
