import { NamedAPIResource } from '@app/describe/poke-api-types';
import { Injectable } from '@angular/core';
import { State, Selector, createSelector, Action, StateContext } from '@ngxs/store';
import { PokeapiService } from '@app/shared-modules/services/pokeapi.service';
import { tap, map, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class GetSchemaList {
  static readonly type = '[CACHE] Get Schema List';
  constructor(public schema: string) {}
}

export class GetRecordById {
  static readonly type = '[CACHE] Get Record by ID';
  constructor(public schema: string, public recordId: number) {}
}

export interface CacheStateModel {
  lists: {
    [schema: string]:
      | {
          cache_expiration: number;
          data: NamedAPIResource[];
        }
      | undefined;
  };
  records: {
    [schema: string]:
      | {
          [id: number]:
            | {
                cache_expiration: number;
                data: any;
              }
            | undefined;
        }
      | undefined;
  };
}

@Injectable()
@State<CacheStateModel>({
  name: 'cache',
  defaults: {
    lists: {},
    records: {},
  },
})
export class CacheState {
  constructor(private apiService: PokeapiService) {}

  @Selector()
  static listState(listKey: string) {
    return createSelector([CacheState], (state: { cache: CacheStateModel }) => {
      return state.cache.lists[listKey];
    });
  }

  @Selector()
  static recordState(schema: string, recordId: number) {
    return createSelector([CacheState], (state: { cache: CacheStateModel }) => {
      const schemaRecords = state.cache.records[schema];
      if (!schemaRecords) {
        return undefined;
      }
      return schemaRecords[recordId];
    });
  }

  @Action(GetSchemaList)
  getSchemaList(ctx: StateContext<CacheStateModel>, action: GetSchemaList) {
    const currentState = ctx.getState();
    const listCache = currentState.lists[action.schema];
    if (listCache && listCache.cache_expiration > new Date().getTime()) {
      return of(listCache);
    }
    return this.apiService.list(action.schema, { limit: 10000, offset: 0 }).pipe(
      map(response => {
        const expirationDate = new Date();
        expirationDate.setMinutes(expirationDate.getMinutes() + 15);
        return { cache_expiration: expirationDate.getTime(), data: response.results };
      }),
      tap(response => {
        ctx.patchState({ lists: { ...currentState.lists, [action.schema]: response } });
      })
    );
  }

  @Action(GetRecordById)
  getRecordById(ctx: StateContext<CacheStateModel>, action: GetRecordById) {
    const currentState = ctx.getState();
    const schemaCache = currentState.records[action.schema];
    if (schemaCache) {
      const recordCache = schemaCache[action.recordId];
      if (recordCache && recordCache.cache_expiration > new Date().getTime()) {
        return of(recordCache);
      }
    }
    return this.apiService.item(action.schema, action.recordId).pipe(
      map(response => {
        const expirationDate = new Date();
        expirationDate.setMinutes(expirationDate.getMinutes() + 15);
        return { cache_expiration: expirationDate.getTime(), data: response };
      }),
      catchError((error: HttpErrorResponse) => throwError(error.error)),
      tap(response => {
        ctx.patchState({
          records: { ...currentState.records, [action.schema]: { ...schemaCache, [action.recordId]: response } },
        });
      })
    );
  }
}
