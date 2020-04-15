import { Injectable } from '@angular/core';
import { PokeapiService } from '@app/shared-modules/services/pokeapi.service';
import { ListOptions } from '@app/describe/poke-api-types';

@Injectable()
export class BerryFirmnessesService {
  constructor(private apiService: PokeapiService) {}

  getBerryFirmnessesList(listOptions?: ListOptions) {
    return this.apiService.list('berry-firmness', listOptions);
  }
}
