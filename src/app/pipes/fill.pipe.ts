import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
  name: 'fill'
})
export class FillPipe implements PipeTransform {

  transform(value: number) {
    let arr: any[] = [];
    for (let i = 0; i <= value; i++) {
      arr.push(i);
    }
    return arr;
  }
}
