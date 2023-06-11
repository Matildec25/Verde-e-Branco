import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipamentosAcessoriosPage } from './equipamentos-acessorios.page';

const routes: Routes = [
  {
    path: '',
    component: EquipamentosAcessoriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipamentosAcessoriosPageRoutingModule {}
