import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { ListResponse, ListOptions } from '@app/describe/poke-api-types';

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

  item(schemaName: string, id: string) {
    return this.http.get<any>(`${environment.pokeapi_url}/${schemaName}/${id}`);
  }
}
