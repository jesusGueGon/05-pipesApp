import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): string {

    if(value === true)
    {
      return 'Vuela';
    }
    else
    {
      return 'No vuela'
    }

  }

}
