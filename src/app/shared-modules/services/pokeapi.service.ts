import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ListResponse, ListOptions } from 'src/app/describe/poke-api-types';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private http: HttpClient) {}

  list(schemaName: string, listOptions: ListOptions = { limit: 20, offset: 0 }) {
    return this.http.get<ListResponse>(
      `${environment.pokeapi_url}/${schemaName}?limit=${listOptions.limit}&offset=${listOptions.offset}`
    );
  }
}