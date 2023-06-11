import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Boxcr7Page } from './boxcr7.page';

const routes: Routes = [
  {
    path: '',
    component: Boxcr7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Boxcr7PageRoutingModule {}
