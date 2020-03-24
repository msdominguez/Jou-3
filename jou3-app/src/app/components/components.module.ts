import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReduxModule } from 'src/app/redux/redux.module';

import { CheckboxComponent } from './checkbox.component';
import { FiltersComponent } from './filters.component';
import { HomeComponent } from './home.component';
import { InputComponent } from './input.component';
import { ListEntriesComponent } from './list-entries.component';
import { MainNavComponent } from './main-nav.component';
import { SvgComponent } from './svg-icon.component';
import { ViewEntriesComponent } from './view-entries.component';

// import { ServicesModule } from 'src/app/services/services.module';

// import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    ReduxModule
    // ServicesModule
  ],
  // schemas
  declarations: [
    HomeComponent,
    MainNavComponent,
    InputComponent,
    ViewEntriesComponent,
    ListEntriesComponent,
    SvgComponent,
    CheckboxComponent,
    FiltersComponent
  ]
  // exports
  // entryComponents
})
export class ComponentsModule {}
