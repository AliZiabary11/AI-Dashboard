import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderConventionPipe',
})
export class GenderConventionPipePipe implements PipeTransform {
  transform(value: boolean | undefined, ...args: unknown[]): string {
    if (value || value == undefined) {
      return 'مرد';
    } else {
      return 'زن';
    }
  }
}
