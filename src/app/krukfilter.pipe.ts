import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'krukfilter'
})
export class KrukfilterPipe implements PipeTransform {

  transform(array: any, args?: any): any {
    //console.log("args[0]="+JSON.stringify(args[1]));
    if (args) {
      array = array.filter(item => item["borzaya"]);
    }
    /* args.forEach(e => {
      if (e.value) {
        console.log("changed");
        array = array.filter(item => item[e.name]);
      }
    }); */
    //return array.filter(item => borzaya?item.borzaya==borzaya:true);
    return array;
  }

}
