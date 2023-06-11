import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipamentosCriancaPage } from './equipamentos-crianca.page';

const routes: Routes = [
  {
    path: '',
    component: EquipamentosCriancaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipamentosCriancaPageRoutingModule {}
