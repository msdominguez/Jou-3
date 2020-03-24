import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeInput } from 'src/app/models';
import { HomeAdapter } from 'src/app/redux/home/adapter';

@Component({
  selector: "jou-home",
  template: `
    <jou-main-nav [showSecondaryOptions]="true"></jou-main-nav>

    <div class="inputs">
      <div
        class="input-row"
        *ngFor="let input of (inputs$ | async).slice(0, 1); index as i"
      >
        <jou-input
          class="input"
          [label]="input.label"
          [placeholder]="input.placeholder"
          [type]="'text'"
        ></jou-input>

        <jou-input
          *ngFor="let input of (inputs$ | async).slice(1, 2); index as i"
          class="input"
          [label]="input.label"
          [placeholder]="input.placeholder"
          [type]="'date'"
        ></jou-input>
      </div>

      <div
        class="input-row"
        *ngFor="let input of (inputs$ | async).slice(2, 5); index as i"
      >
        <jou-input
          *ngIf="!isEntry(i)"
          class="input"
          [label]="input.label"
          [placeholder]="input.placeholder"
          [type]="'text'"
        ></jou-input>

        <jou-input
          *ngIf="isEntry(i)"
          class="input"
          [label]="input.label"
          [placeholder]="input.placeholder"
          [type]="'textarea'"
        ></jou-input>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100vw;
        height: 100vh;
        display: flex;
      }

      .inputs {
        margin: 2rem 4rem 0 4rem;
        width: 60%;
      }

      .input-row {
        display: flex;
        margin-bottom: 2rem;
      }

      .input {
        width: 100%;
      }

      .input:not(:last-child) {
        margin-right: 1rem;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  inputs$: Observable<HomeInput[]>;

  constructor(private homeAdapter: HomeAdapter) {}

  ngOnInit() {
    this.inputs$ = this.homeAdapter.getInputs();
  }

  isEntry(i): boolean {
    return i === 2;
  }
}
