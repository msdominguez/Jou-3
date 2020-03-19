import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ListEntryUtils } from './../../utils/list-entry.utils';
import { State } from './state';

export const rootSelector = createFeatureSelector<State>("entries");

const getEntries = createSelector(rootSelector, ListEntryUtils.buildEntries);

export const Selectors = {
  getEntries
};
