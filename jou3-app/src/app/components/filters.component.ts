import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FiltersAdapter } from './../redux/filters/adapter';

@Component({
  selector: "jou-filters",
  animations: [
    trigger("toggleCollapse", [
      state(
        "collapsed",
        style({
          transform: "rotate(0deg)"
        })
      ),
      state(
        "expanded",
        style({
          transform: "rotate(-180deg)"
        })
      ),
      transition("collapsed => expanded", [animate("0.2s")]),
      transition("expanded => collapsed", [animate("0.2s")])
    ])
  ],
  template: `
    <h2 class="header">Filters</h2>

    <div class="inputs">
      <jou-input [type]="'text'" [label]="'Year'"></jou-input>
      <jou-input [type]="'text'" [label]="'Month'"></jou-input>
      <jou-input [type]="'text'" [label]="'Day'"></jou-input>
      <jou-input [type]="'text'" [label]="'Keyword'"></jou-input>
    </div>

    <!-- chev stuff -->
    <div class="chevron-icon-container">
      <jou-svg-icon
        [@toggleCollapse]="(collapsed$ | async) ? 'collapsed' : 'expanded'"
        class="chevron-icon"
        [name]="'chevron-down'"
        [width]="19"
        [height]="11"
        (clicked)="onChevClick()"
      ></jou-svg-icon>

      <!-- <jou-svg-icon
        *ngIf="!(collapsed$ | async)"
        class="chevron-icon"
        [name]="'chevron-up'"
        [width]="19"
        [height]="11"
        (clicked)="onChevClick()"
      ></jou-svg-icon> -->
    </div>
  `,
  styles: [
    `
      :host {
        height: 30%;
        width: 100%;
        display: flex;
        z-index: 1;
        box-shadow: 0 4px 8px -5px var(--jou-pink-1);
        display: flex;
        flex-direction: column;
      }

      .header {
        font-size: 1.125rem;
        color: var(--jou-pink-8);
        text-transform: uppercase;
        margin: 2rem 0 1.5rem 2rem;
        letter-spacing: 1px;
      }

      .inputs {
        display: flex;
        justify-content: space-between;
        margin: 0 3rem;
      }

      .chevron-icon-container {
        display: flex;
        justify-content: flex-end;
        margin: 1rem 3rem 1rem 0;
      }

      .chevron-icon {
        padding: 0.75rem;
        border-radius: 50%;
        cursor: pointer;
      }

      .chevron-icon:hover {
        background-color: var(--jou-pink-2);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {
  collapsed$: Observable<boolean>;

  constructor(private filtersAdapter: FiltersAdapter) {}

  ngOnInit() {
    this.collapsed$ = this.filtersAdapter.getCollapsed();
  }

  onChevClick() {
    this.filtersAdapter.toggleCollapsed();
  }
}
