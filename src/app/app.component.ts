import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <lib-the-one-portal-shell>
    <router-outlet></router-outlet>
  </lib-the-one-portal-shell>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
