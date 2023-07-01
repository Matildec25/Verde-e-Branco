import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprarbilhetesPage } from './comprarbilhetes.page';

const routes: Routes = [
  {
    path: '',
    component: ComprarbilhetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprarbilhetesPageRoutingModule {}
