import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString'
})
export class ArrayToStringPipe implements PipeTransform {
  transform(value: string[]): string {
    if (!value) return '';
    return value.join(' | ');
  }
}
