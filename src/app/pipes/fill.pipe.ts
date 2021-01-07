import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
  name: 'fill'
})
export class FillPipe implements PipeTransform {
  arr: any = [];
  transform(value: number) {
    for (let i = 0; i < value; i++) {
      this.arr.push(i);
    }
    return this.arr;
  }
}
