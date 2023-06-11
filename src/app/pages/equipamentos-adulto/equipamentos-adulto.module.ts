import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipamentosAdultoPageRoutingModule } from './equipamentos-adulto-routing.module';

import { EquipamentosAdultoPage } from './equipamentos-adulto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipamentosAdultoPageRoutingModule
  ],
  declarations: [EquipamentosAdultoPage]
})
export class EquipamentosAdultoPageModule {}
