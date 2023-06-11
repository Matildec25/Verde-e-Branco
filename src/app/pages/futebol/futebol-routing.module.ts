import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutebolPage } from './futebol.page';

const routes: Routes = [
  {
    path: '',
    component: FutebolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FutebolPageRoutingModule {}
