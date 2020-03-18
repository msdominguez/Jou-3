import { createFeatureSelector, createSelector } from '@ngrx/store';

import { HomeInputUtils } from './../../utils/home-input.utils';
import { State } from './state';

export const rootSelector = createFeatureSelector<State>("home");

const getInputs = createSelector(rootSelector, HomeInputUtils.buildInputs);

export const Selectors = {
  getInputs
};
