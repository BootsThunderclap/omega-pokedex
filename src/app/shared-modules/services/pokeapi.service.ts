import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface ListOptions {
  limit: number;
  offset: number;
}

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private http: HttpClient) {}

  list(schemaName: string, listOptions: ListOptions = { limit: 20, offset: 0 }) {
    return this.http.get(
      `${environment.pokeapi_url}/${schemaName}?limit=${listOptions.limit}&offset=${listOptions.offset}`
    );
  }
}
