import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprarbilhetesPageRoutingModule } from './comprarbilhetes-routing.module';

import { ComprarbilhetesPage } from './comprarbilhetes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprarbilhetesPageRoutingModule
  ],
  declarations: [ComprarbilhetesPage]
})
export class ComprarbilhetesPageModule {}
