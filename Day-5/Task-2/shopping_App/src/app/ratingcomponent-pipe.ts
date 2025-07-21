import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingcomponent'
})
export class RatingcomponentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
