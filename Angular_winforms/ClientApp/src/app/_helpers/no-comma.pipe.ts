/*
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noComma'
})
export class NoCommaPipe implements PipeTransform {

  transform(value: number, length?: number): string {
    if (value != null && value != undefined) {
      let str = value.toString();
      if (!length)
        length = 7;
      if (str.length < length)
        str = "0".repeat(length - str.length) + str;
      return str;
    }
    else
      return null;
  }

}
*/
