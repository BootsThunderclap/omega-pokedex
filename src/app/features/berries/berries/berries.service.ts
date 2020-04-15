import { Injectable } from '@angular/core';
import { PokeapiService } from 'src/app/shared-modules/services/pokeapi.service';
import { ListOptions } from 'src/app/describe/poke-api-types';

@Injectable()
export class BerriesService {
  constructor(private apiService: PokeapiService) {}

  getBerriesList(listOptions?: ListOptions) {
    return this.apiService.list('berry', listOptions);
  }
}
