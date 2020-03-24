import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: "jou-checkbox",
  template: `
    <input type="checkbox" />
  `,
  styles: [
    `
      input[type="checkbox"] {
        background-color: none;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 3px;
        border: 1px solid var(--jou-pink-5);
        -webkit-appearance: none;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        cursor: pointer;
        font-size: 13px;
      }

      input[type="checkbox"]:checked {
        background-color: var(--jou-pink-8);
        border: 1px solid var(--jou-pink-8);
      }

      input[type="checkbox"]:checked:before {
        content: "✔";
        color: var(--jou-pink-3);
        font-size: 13px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {}
