import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name : 'trimText'
})
export class TrimTextPipe implements PipeTransform{
    transform( data : string , trimLen : number = 30) : string {
        return data.length < trimLen ? data : data.substring(0,trimLen) + '...';
    }
}