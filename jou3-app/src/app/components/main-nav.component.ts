import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: "app-main-nav",
  template: `
    <div class="menu-container">
      <a href="/">
        <img src="/assets/logo.svg" />
      </a>

      <a href="/">
        <div class="icon-container">
          <svg-icon
            class="icon"
            [name]="'new'"
            [width]="32"
            [height]="32"
          ></svg-icon>
        </div>
      </a>

      <a href="/viewentries">
        <div class="icon-container">
          <svg-icon
            class="icon"
            [name]="'entries'"
            [width]="32"
            [height]="30"
          ></svg-icon>
        </div>
      </a>

      <div class="icon-container">
        <svg-icon
          class="icon"
          [name]="'hearts'"
          [width]="41"
          [height]="29"
        ></svg-icon>
      </div>

      <ng-container *ngIf="showSecondaryOptions">
        <hr class="divider" />

        <div class="icon-container">
          <svg-icon
            class="icon"
            [name]="'save'"
            [width]="32"
            [height]="32"
          ></svg-icon>
        </div>

        <div class="icon-container">
          <svg-icon
            class="icon"
            [name]="'erase'"
            [width]="32"
            [height]="34"
          ></svg-icon>
        </div>
      </ng-container>
    </div>
  `,
  styles: [
    `
      :host {
        background-color: var(--jou-pink-2);
        display: block;
        width: 40%;
        height: 100vh;
        border-top-right-radius: 3rem;
        box-shadow: 0px 0px 16px 2px var(--jou-pink-5-transparent);
        z-index: 1;
      }

      .menu-container {
        display: flex;
        flex-direction: column;
        float: right;
        margin: 1rem 1rem 0 0;
      }

      .icon-container {
        display: flex;
        justify-content: center;
        cursor: pointer;
      }

      .icon-container:hover {
        background-color: var(--jou-pink-4);
      }

      .icon {
        margin: 1rem 0;
      }

      .divider {
        color: var(--jou-pink-5);
        width: 50%;
        border: 0.5px solid;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNavComponent {
  @Input() showSecondaryOptions = true;

  constructor() {}
}
