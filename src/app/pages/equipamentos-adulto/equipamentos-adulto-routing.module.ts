import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipamentosAdultoPage } from './equipamentos-adulto.page';

const routes: Routes = [
  {
    path: '',
    component: EquipamentosAdultoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipamentosAdultoPageRoutingModule {}
