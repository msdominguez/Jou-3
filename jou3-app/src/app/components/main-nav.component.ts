import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: "app-main-nav",
  template: `
    <div class="menu-container">
      <img src="/assets/logo.svg" />

      <div class="icon-container">
        <img class="icon" src="/assets/new.svg" />
      </div>

      <div class="icon-container">
        <img class="icon" src="/assets/view-entries.svg" />
      </div>

      <div class="icon-container">
        <img class="icon" src="/assets/hearts.svg" />
      </div>

      <hr class="divider" />

      <div class="icon-container">
        <img class="icon" src="/assets/save.svg" />
      </div>

      <div class="icon-container">
        <img class="icon" src="/assets/erase.svg" />
      </div>
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
  constructor() {}
}
