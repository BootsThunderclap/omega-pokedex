import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listItemId',
})
export class ListItemIdPipe implements PipeTransform {
  transform(url: string) {
    const parts = url.split('/');
    return parts.pop() || parts.pop();
  }
}
