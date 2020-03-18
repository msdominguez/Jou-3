import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HomeInput } from 'src/app/models';

import { Selectors } from './selectors';
import { State } from './state';

// import * as Actions from './actions';
@Injectable()
export class HomeAdapter {
  constructor(private store: Store<State>) {}

  getInputs(): Observable<HomeInput[]> {
    return this.store.pipe(select(Selectors.getInputs));
  }
}
