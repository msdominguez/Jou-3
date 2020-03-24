import { InjectionToken } from '@angular/core';
import { ActionReducer, createReducer, on } from '@ngrx/store';

import * as Actions from './actions';
import { initialState, State } from './state';

export const FILTERS_REDUCER_TOKEN = new InjectionToken<ActionReducer<State>>(
  "Filters Reducers"
);

export function reducers() {
  return createReducer(
    initialState,
    on(Actions.toggleCollapsed, state => ({
      ...state,
      collapsed: !state.collapsed
    }))
  );
}
