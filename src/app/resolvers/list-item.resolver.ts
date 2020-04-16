import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { GetRecordById, CacheState } from '@app/state/app-cache';
import { of } from 'rxjs';

export interface ListItemResolved {
  listItem?: any;
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ListItemResolver implements Resolve<ListItemResolved> {
  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot) {
    const schema = route.data.schema;
    const recordIdStr = route.paramMap.get('recordId');
    if (!schema || !recordIdStr) {
      return { error: 'Schema or recordId could not be retrieved from the route' };
    }
    const recordId = parseInt(recordIdStr, 10);
    return this.store.dispatch(new GetRecordById(schema, recordId)).pipe(
      map(() => {
        const state = this.store.selectSnapshot(CacheState.recordState(schema, recordId));
        if (!state) {
          return { error: 'Could not resolve record from state' };
        }
        return { listItem: state.data };
      }),
      catchError(error => {
        return of({ error });
      })
    );
  }
}
