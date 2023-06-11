import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColecoesPage } from './colecoes.page';

const routes: Routes = [
  {
    path: '',
    component: ColecoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColecoesPageRoutingModule {}
