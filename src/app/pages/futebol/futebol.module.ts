import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FutebolPageRoutingModule } from './futebol-routing.module';

import { FutebolPage } from './futebol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FutebolPageRoutingModule
  ],
  declarations: [FutebolPage]
})
export class FutebolPageModule {}
