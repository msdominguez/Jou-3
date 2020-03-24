import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './state';

export const rootSelector = createFeatureSelector<State>("filters");

const getCollapsed = createSelector(
  rootSelector,
  (state: State): boolean => state.collapsed
);

export const Selectors = {
  getCollapsed
};
