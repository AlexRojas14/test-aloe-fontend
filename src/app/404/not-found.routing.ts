import { Routes } from '@angular/router';

import { NotFoundComponent } from './not-found.component';

export const NotFoundRouter: Routes = [
  {
    path: '',
    component: NotFoundComponent,
    children: []
  }
];
