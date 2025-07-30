import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egpCurrency'
})
export class EgpCurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
