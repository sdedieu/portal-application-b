import { Routes } from "@angular/router";
import { IsLoggedInGuard } from 'the-one-portal-shell';

export const routes: Routes = [
  { path: '', canActivate: [IsLoggedInGuard], loadComponent: async () => await (await import('./quotes-search/quotes-search.component')).QuotesSearchComponent }
];
