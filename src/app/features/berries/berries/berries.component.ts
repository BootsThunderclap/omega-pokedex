import { Component } from '@angular/core';
import { BerriesService } from './berries.service';
import { NamedAPIResource, ListOptions } from '@app/describe/poke-api-types';
import { LazyLoadEvent } from 'primeng';

@Component({
  selector: 'app-berries',
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.scss'],
  providers: [BerriesService],
})
export class BerriesComponent {
  berries: NamedAPIResource[];
  totalRecords: number;
  loading = true;

  constructor(private berriesService: BerriesService) {}

  loadBerriesLazy(event: LazyLoadEvent) {
    this.loading = true;
    const listOptions: ListOptions = {
      limit: event.rows || 20,
      offset: event.first || 0,
    };
    this.berriesService.getBerriesList(listOptions).subscribe(response => {
      this.berries = response.results;
      this.totalRecords = response.count;
      this.loading = false;
    });
  }
}
