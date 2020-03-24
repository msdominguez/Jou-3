import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  template: `
    <svg-definitions></svg-definitions>
    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {
  title = "jou3-app";
}
