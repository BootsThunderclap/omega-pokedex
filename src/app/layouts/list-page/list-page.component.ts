import { Component, Input, OnInit } from '@angular/core';
import { ListPageService } from './list-page.service';
import { NamedAPIResource } from '@app/describe/poke-api-types';
import { SortEvent } from 'primeng/api';
import { Observable } from 'rxjs';
import { ListItemIdPipe } from '@app/pipes/list-item-id-pipe/list-item-id.pipe';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  providers: [ListPageService],
})
export class ListPageComponent implements OnInit {
  @Input() schema: string;

  listItems$: Observable<NamedAPIResource[]>;

  constructor(private listPageService: ListPageService) {}

  ngOnInit() {
    this.listItems$ = this.listPageService.getList(this.schema);
  }

  customSort(event: SortEvent) {
    const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
    event.data?.sort((data1, data2) => {
      let result: number;
      let value1: string | undefined;
      let value2: string | undefined;
      if (event.field === 'url') {
        const listItemIdPipe = new ListItemIdPipe();
        value1 = listItemIdPipe.transform(data1[event.field]);
        value2 = listItemIdPipe.transform(data2[event.field]);
      } else if (event.field === 'name') {
        value1 = data1[event.field];
        value2 = data2[event.field];
      }
      if (!value1 && value2) {
        result = -1;
      } else if (value1 && !value2) {
        result = 1;
      } else if (!value1 && !value2) {
        result = 0;
      } else {
        // Null checks above
        // tslint:disable-next-line: no-non-null-assertion
        result = event.order === 1 ? collator.compare(value1!, value2!) : collator.compare(value2!, value1!);
      }
      return result;
    });
  }
}
