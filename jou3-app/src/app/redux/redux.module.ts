import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HomeAdapter } from './home/adapter';
import { HOME_REDUCER_TOKEN, reducers as homeReducers } from './home/reducer';

// import { HomeEffects } from './home/effects';
// import { ServicesModule } from 'src/app/services/services.module';

// import adapters, effects, reducers
@NgModule({
  imports: [
    // ServicesModule,
    StoreModule.forFeature("home", HOME_REDUCER_TOKEN)
    // EffectsModule.forFeature([HomeEffects])
  ],
  providers: [
    { provide: HOME_REDUCER_TOKEN, useFactory: homeReducers },
    HomeAdapter
  ]
})
export class ReduxModule {}
