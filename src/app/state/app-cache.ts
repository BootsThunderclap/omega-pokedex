import { NamedAPIResource } from '@app/describe/poke-api-types';
import { Injectable } from '@angular/core';
import { State, Selector, createSelector, Action, StateContext } from '@ngxs/store';
import { PokeapiService } from '@app/shared-modules/services/pokeapi.service';
import { tap, map } from 'rxjs/operators';
import { of } from 'rxjs';

export class GetSchemaList {
  static readonly type = '[CACHE] Get Schema List';
  constructor(public schema: string) {}
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
    [schema: string]: {
      [id: number]: {
        cache_expiration: Date;
        data: any;
      };
    };
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
        ctx.patchState({ lists: { [action.schema]: response } });
      })
    );
  }
}
