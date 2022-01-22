import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'toArray'
})
export class ToArrayPipe implements PipeTransform {
  transform(input: any): any {
    if (!this.isObject(input)) {
      return input
    }
    console.log('toArray-pipe: isObject')
    const output = Object.keys(input).map(value => input[value])
    console.log(output)
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