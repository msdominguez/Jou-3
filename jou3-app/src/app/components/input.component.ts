import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: "app-input",
  template: `
    <label class="input-label">{{ label }}</label>
    <input
      [class.long]="isLong()"
      [class.short]="isShort()"
      [class.full]="isFull()"
      class="input"
      placeholder="{{ placeholder }}"
    />
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
      }

      .input-label {
        color: var(--jou-pink-8);
        font-size: 1rem;
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
        font-size: 1rem;
        padding: 0.25rem 1rem;
        letter-spacing: 0.5px;
        transition: border 0.5s;
      }

      .input:focus {
        border: 2px solid var(--jou-pink-5);
        outline: none;
      }

      .long {
        width: 30rem;
      }

      .short {
        width: 25rem;
      }

      .full {
        width: 100%;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() width: string;

  constructor() {}

  isLong(): boolean {
    return this.width === "long";
  }

  isShort(): boolean {
    return this.width === "short";
  }

  isFull(): boolean {
    return this.width === "full";
  }
}
