import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number2string'
})
export class Number2stringPipe implements PipeTransform {

  transform(value: unknown): string {
    return 'null';
  }

}
