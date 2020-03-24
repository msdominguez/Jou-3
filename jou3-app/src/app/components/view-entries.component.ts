import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: "jou-view-entries",
  template: `
    <jou-main-nav [showSecondaryOptions]="false"></jou-main-nav>

    <div class="filters-entries">
      <jou-filters></jou-filters>
      <jou-list-entries></jou-list-entries>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100vw;
        height: 100vh;
        display: flex;
      }

      .filters-entries {
        display: flex;
        width: calc(60% + 8rem);
        flex-direction: column;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewEntriesComponent {}
