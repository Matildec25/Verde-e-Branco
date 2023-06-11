import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistarPage } from './registar.page';

import { RegistarPageRoutingModule } from './registar-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RegistarPageRoutingModule
  ],
  declarations: [RegistarPage]
})
export class RegistarPageModule {}
