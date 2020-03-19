import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  template: `
    <svg-definitions></svg-definitions>
    <router-outlet></router-outlet>
  `,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "jou3-app";
}
