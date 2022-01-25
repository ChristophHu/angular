import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'toArray'
})
export class ToArrayPipe implements PipeTransform {
  transform(input: any): any {
    if (!this.isObject(input)) {
      return input
    }
    const output = Object.keys(input).map(value => input[value])
    return Object.keys(input).map(value => input[value])
  }

  isObject(value: any): boolean {
    return value !== null && typeof value === 'object'
  }
}

// @NgModule({
//   declarations: [ToArrayPipe],
//   exports: [ToArrayPipe],
// })
// export class NgToArrayPipeModule {}