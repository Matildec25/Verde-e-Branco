import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColecoesPageRoutingModule } from './colecoes-routing.module';

import { ColecoesPage } from './colecoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColecoesPageRoutingModule
  ],
  declarations: [ColecoesPage]
})
export class ColecoesPageModule {}
