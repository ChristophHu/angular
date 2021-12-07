import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string2number'
})
export class String2numberPipe implements PipeTransform {

  transform(value: string | null): number {
    return +value!;
  }

}
