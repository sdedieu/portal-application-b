import { Routes } from "@angular/router";
import { IsLoggedInGuard } from 'portal-shell';

export const routes: Routes = [
  { path: '', canActivate: [IsLoggedInGuard], loadComponent: async() => await (await import('./quotes-search/quotes-search.component')).QuotesSearchComponent}
];
