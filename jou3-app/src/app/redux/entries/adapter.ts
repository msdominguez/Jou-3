import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ListEntry } from 'src/app/models';

import { Selectors } from './selectors';
import { State } from './state';

// import * as Actions from './actions';
@Injectable()
export class EntriesAdapter {
  constructor(private store: Store<State>) {}

  getEntries(): Observable<ListEntry[]> {
    return this.store.pipe(select(Selectors.getEntries));
  }
}
