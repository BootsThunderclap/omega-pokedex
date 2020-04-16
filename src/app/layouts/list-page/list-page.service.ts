import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetSchemaList, CacheState } from '@app/state/app-cache';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import cloneDeep from 'lodash-es/cloneDeep';

@Injectable()
export class ListPageService {
  constructor(private store: Store) {}

  getList(schema: string) {
    return this.store.dispatch(new GetSchemaList(schema)).pipe(
      map(() => {
        const state = this.store.selectSnapshot(CacheState.listState(schema));
        if (!state) {
          throw new ReferenceError('There was an error retrieving list data');
        }
        return cloneDeep(state.data);
      }),
      catchError(error => throwError(error))
    );
  }
}
