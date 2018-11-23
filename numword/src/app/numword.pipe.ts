import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
  name: 'numword',
  pure: true
})
export class NumwordPipe implements PipeTransform {

  transform(value: number, arg1: string, arg2: string, arg3: string): string {
   
    let dd:number=value%100;
    if ( (dd>=11) && (dd<=19) )
        return value+' '+arg3;
    let d:number=value%10;
    if ( d==1 )
        return value+' '+arg1;
    if ( (d>=2) && (d<=4) )
        return value+' '+arg2;
    return value+' '+arg3;
  }
    
}
