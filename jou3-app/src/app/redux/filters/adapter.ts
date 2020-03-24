import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as Actions from './actions';
import { Selectors } from './selectors';
import { State } from './state';

@Injectable()
export class FiltersAdapter {
  constructor(private store: Store<State>) {}

  getCollapsed(): Observable<boolean> {
    return this.store.pipe(select(Selectors.getCollapsed));
  }

  toggleCollapsed(): void {
    this.store.dispatch(Actions.toggleCollapsed());
  }
}
