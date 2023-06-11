import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipamentosMulherPageRoutingModule } from './equipamentos-mulher-routing.module';

import { EquipamentosMulherPage } from './equipamentos-mulher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipamentosMulherPageRoutingModule
  ],
  declarations: [EquipamentosMulherPage]
})
export class EquipamentosMulherPageModule {}
