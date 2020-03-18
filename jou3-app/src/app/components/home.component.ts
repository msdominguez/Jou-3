import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeInput } from 'src/app/models';
import { HomeAdapter } from 'src/app/redux/home/adapter';

@Component({
  selector: "app-home",
  template: `
    <app-main-nav></app-main-nav>

    <div class="inputs">
      <div
        class="input-row"
        *ngFor="let input of (inputs$ | async).slice(0, 1); index as i"
      >
        <app-input
          class="input"
          [label]="input.label"
          [placeholder]="input.placeholder"
        ></app-input>

        <app-input
          *ngFor="let input of (inputs$ | async).slice(1, 2); index as i"
          class="input"
          [label]="input.label"
          [placeholder]="input.placeholder"
        ></app-input>
      </div>

      <div
        class="input-row"
        *ngFor="let input of (inputs$ | async).slice(2, 5); index as i"
      >
        <app-input
          class="input"
          [label]="input.label"
          [placeholder]="input.placeholder"
        ></app-input>
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
  // placeholders$: Observable<string[]>;

  constructor(private homeAdapter: HomeAdapter) {}

  ngOnInit() {
    this.inputs$ = this.homeAdapter.getInputs();
    // this.placeholders$ = this.homeAdapter.getInputPlaceholders();
  }

  isNewRow(i): boolean {
    console.log(i);
    return i !== 1;
  }

  // model:
  // input.label
  // input.placeholder

  // then i can use one array instead of 2
}
