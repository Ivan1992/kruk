import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'krukfilter'
})
export class KrukfilterPipe implements PipeTransform {

  transform(array: any, opts?: any, notes?: any, sounds?: any): any {
    opts.forEach(e => {
      if (e.value) {
        array = array.filter(item => item[e.name]);
      }
    });
    notes.forEach(e => {
      if (e.value) {
        array = array.filter(item => item.pitch === e.name);
      }
    });
    if (sounds > 0 && sounds < 10) {
      array = array.filter(item => item.sounds == sounds);
    }
    return array;
  }

}
