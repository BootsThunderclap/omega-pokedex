import { Injectable } from '@angular/core';
import { PokeapiService } from '@app/shared-modules/services/pokeapi.service';
import { ListOptions } from '@app/describe/poke-api-types';

@Injectable()
export class ListPageService {
  constructor(private apiService: PokeapiService) {}

  getList(schema: string, listOptions?: ListOptions) {
    return this.apiService.list(schema, listOptions);
  }
}
