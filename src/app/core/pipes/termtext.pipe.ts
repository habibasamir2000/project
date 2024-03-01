import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termtext'
})
export class TermtextPipe implements PipeTransform {

  transform(text: string, limit: number): string {
    return text.split(' ').splice(0,limit).join(' ');
  }

}
