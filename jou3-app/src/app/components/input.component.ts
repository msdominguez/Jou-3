import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: "app-input",
  template: `
    <label class="input-label">{{ label }}</label>
    <input
      *ngIf="type === 'text'"
      class="input"
      placeholder="{{ placeholder }}"
    />

    <input
      *ngIf="type === 'date'"
      type="date"
      class="input"
      placeholder="{{ placeholder }}"
    />

    <textarea
      *ngIf="type === 'textarea'"
      class="input textarea"
      placeholder="{{ placeholder }}"
    ></textarea>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
      }

      .input-label {
        color: var(--jou-pink-8);
        font-size: 0.75rem;
        text-transform: uppercase;
        margin: 0 0 0.5rem 0.5rem;
        letter-spacing: 1px;
      }

      .input {
        color: var(--jou-pink-9);
        border: 2px solid var(--jou-pink-1);
        border-radius: 0.5rem;
        background: none;
        height: 2rem;
        font-size: 0.938rem;
        padding: 0.25rem 1rem;
        letter-spacing: 0.5px;
        transition: border 0.5s;
        font-family: Inter;
      }

      .input:focus {
        border: 2px solid var(--jou-pink-5);
        outline: none;
      }

      .textarea {
        min-height: 30rem;
        padding: 0.5rem 1rem;
        resize: vertical;
      }

      ::-webkit-resizer {
        border-bottom-right-radius: 20px;
        border-top-left-radius: 50px;
        border-top: 1px dashed var(--jou-pink-7);
        border-left: 1px dashed var(--jou-pink-7);
      }

      ::-webkit-input-placeholder {
        font-style: italic;
        color: var(--jou-pink-5);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: string;

  constructor() {}
}
