import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotFoundComponent } from './not-found.component';

import { NotFoundRouter } from './not-found.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(NotFoundRouter),
    NgbModule,
  ],
  declarations: [
    NotFoundComponent,
  ]
})
export class NotFoundModule {}
