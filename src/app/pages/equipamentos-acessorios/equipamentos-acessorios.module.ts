import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipamentosAcessoriosPageRoutingModule } from './equipamentos-acessorios-routing.module';

import { EquipamentosAcessoriosPage } from './equipamentos-acessorios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipamentosAcessoriosPageRoutingModule
  ],
  declarations: [EquipamentosAcessoriosPage]
})
export class EquipamentosAcessoriosPageModule {}
