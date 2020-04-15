import { Injectable } from '@angular/core';
import { PokeapiService } from 'src/app/shared-modules/services/pokeapi.service';

@Injectable()
export class BerriesService {
  constructor(private apiService: PokeapiService) {}

  results = this.apiService.list('berry');
}
