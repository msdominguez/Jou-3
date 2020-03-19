import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: "app-view-entries",
  template: `
    <app-main-nav [showSecondaryOptions]="false"></app-main-nav>
    <app-list-entries></app-list-entries>
  `,
  styles: [
    `
      :host {
        width: 100vw;
        height: 100vh;
        display: flex;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewEntriesComponent {}
