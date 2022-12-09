import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <lib-portal-shell>
    <router-outlet></router-outlet>
  </lib-portal-shell>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
