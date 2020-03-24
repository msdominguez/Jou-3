import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { EntriesAdapter } from './entries/adapter';
import { ENTRIES_REDUCER_TOKEN, reducers as entriesReducers } from './entries/reducer';
import { FiltersAdapter } from './filters/adapter';
import { FILTERS_REDUCER_TOKEN, reducers as filtersReducers } from './filters/reducer';
import { HomeAdapter } from './home/adapter';
import { HOME_REDUCER_TOKEN, reducers as homeReducers } from './home/reducer';

// import { EffectsModule } from '@ngrx/effects';
// import { HomeEffects } from './home/effects';
// import { ServicesModule } from 'src/app/services/services.module';

// import adapters, effects, reducers
@NgModule({
  imports: [
    // ServicesModule,
    StoreModule.forFeature("home", HOME_REDUCER_TOKEN),
    StoreModule.forFeature("filters", FILTERS_REDUCER_TOKEN),
    StoreModule.forFeature("entries", ENTRIES_REDUCER_TOKEN)
    // EffectsModule.forFeature([HomeEffects])
  ],
  providers: [
    { provide: HOME_REDUCER_TOKEN, useFactory: homeReducers },
    { provide: FILTERS_REDUCER_TOKEN, useFactory: filtersReducers },
    { provide: ENTRIES_REDUCER_TOKEN, useFactory: entriesReducers },
    HomeAdapter,
    EntriesAdapter,
    FiltersAdapter
  ]
})
export class ReduxModule {}
