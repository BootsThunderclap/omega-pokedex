import { Component } from '@angular/core';
import { NamedAPIResource, ListOptions } from '@app/describe/poke-api-types';
import { LazyLoadEvent } from 'primeng/api';
import { BerryFirmnessesService } from './berry-firmnesses.service';

@Component({
  selector: 'app-berry-firmnesses',
  templateUrl: './berry-firmnesses.component.html',
  styleUrls: ['./berry-firmnesses.component.scss'],
  providers: [BerryFirmnessesService],
})
export class BerryFirmnessesComponent {
  berryFirmnesses: NamedAPIResource[];
  totalRecords: number;
  loading = true;

  constructor(private berryFirmnessesService: BerryFirmnessesService) {}

  loadBerryFirmnessesLazy(event: LazyLoadEvent) {
    this.loading = true;
    const listOptions: ListOptions = {
      limit: event.rows || 20,
      offset: event.first || 0,
    };
    this.berryFirmnessesService.getBerryFirmnessesList(listOptions).subscribe(response => {
      this.berryFirmnesses = response.results;
      this.totalRecords = response.count;
      this.loading = false;
    });
  }
}
