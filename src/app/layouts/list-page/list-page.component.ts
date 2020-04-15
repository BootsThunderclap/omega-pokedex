import { Component, Input } from '@angular/core';
import { ListPageService } from './list-page.service';
import { NamedAPIResource, ListOptions } from '@app/describe/poke-api-types';
import { LazyLoadEvent } from 'primeng';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  providers: [ListPageService],
})
export class ListPageComponent {
  @Input() schema: string;

  listItems: NamedAPIResource[];
  totalRecords: number;
  loading = true;

  constructor(private listPageService: ListPageService) {}

  loadItemsLazy(event: LazyLoadEvent) {
    this.loading = true;
    const listOptions: ListOptions = {
      limit: event.rows || 20,
      offset: event.first || 0,
    };
    this.listPageService.getList(this.schema, listOptions).subscribe(response => {
      this.listItems = response.results;
      this.totalRecords = response.count;
      this.loading = false;
    });
  }
}
