import { InjectionToken } from '@angular/core';
import { ActionReducer, createReducer, on } from '@ngrx/store';

import { initialState, State } from './state';

// import * as Actions from './actions';
export const HOME_REDUCER_TOKEN = new InjectionToken<ActionReducer<State>>(
  "Home Reducers"
);

export function reducers() {
  return createReducer(
    initialState
    // on(Actions.updateHeaderText, (state, { text }) => ({
    //   ...state,
    //   headerText: text
    // })),
    // on(Actions.incrementCount, state => ({
    //   ...state,
    //   count: state.count + 1
    // })),
    // on(Actions.resetHeaderText, state => ({
    //   ...state,
    //   headerText: 'Welcome to my demo!'
    // })),
    // on(Actions.resetCount, state => ({
    //   ...state,
    //   count: 0
    // }))
  );
}
