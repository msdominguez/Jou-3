import { InjectionToken } from '@angular/core';
import { ActionReducer, createReducer, on } from '@ngrx/store';

import { initialState, State } from './state';

export const ENTRIES_REDUCER_TOKEN = new InjectionToken<ActionReducer<State>>(
  "Entries Reducers"
);

export function reducers() {
  return createReducer(initialState);
}
