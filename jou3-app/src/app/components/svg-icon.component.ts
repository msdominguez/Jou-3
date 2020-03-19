import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: "svg-icon",
  template: `
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      [attr.width]="width"
      [attr.height]="height"
      [attr.fill]="fill"
      [attr.stroke]="stroke"
      (click)="click()"
      (mouseenter)="mouseEnter()"
      (mouseleave)="mouseExit()"
    >
      <use [attr.href]="absUrl + '#' + name"></use>
    </svg>
  `,
  styles: [``]
})
export class SvgComponent {
  @Input() name: string;
  @Input() width: number;
  @Input() height: string;
  @Input() fill = "none";
  @Input() stroke: string;

  @Output() clicked: EventEmitter<any> = new EventEmitter();
  @Output() mouseEntered: EventEmitter<any> = new EventEmitter();
  @Output() mouseExited: EventEmitter<any> = new EventEmitter();

  constructor() {}

  get absUrl() {
    return window.location.href;
  }

  click() {
    this.clicked.emit();
  }

  mouseEnter() {
    this.mouseEntered.emit();
  }

  mouseExit() {
    this.mouseExited.emit();
  }
}
