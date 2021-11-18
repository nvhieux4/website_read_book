import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeHTML'
})
export class PipeHTMLPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const target = value.replace(/<[^>]*>/g, " ")
    return target;
  }

}
