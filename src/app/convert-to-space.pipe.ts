import {Pipe, PipeTransform} from '@angular/core'
import { pipe } from 'rxjs';

@Pipe({
    name:'ConvertToSpaces'
})
export class ConvertToSpaces implements PipeTransform{
    transform(value: string , character: string): string {
        return value.replace(character , '');
}
}