import { Injectable } from '@angular/core';
import { PokeapiService } from '../shared-modules/services/pokeapi.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export interface ListItemResolved {
  listItem?: any;
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ListItemResolver implements Resolve<ListItemResolved> {
  constructor(private apiService: PokeapiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const schema = route.data.schema;
    const recordId = route.paramMap.get('recordId');
    if (!schema || !recordId) {
      return { error: 'Schema or recordId could not be retrieved from the route' };
    }
    return this.apiService.item(schema, recordId).pipe(
      map(response => {
        return { listItem: response };
      }),
      catchError((error: HttpErrorResponse) => {
        return of({ error: error.error });
      })
    );
  }
}
