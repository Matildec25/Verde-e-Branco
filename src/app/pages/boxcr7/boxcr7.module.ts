import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Boxcr7PageRoutingModule } from './boxcr7-routing.module';

import { Boxcr7Page } from './boxcr7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Boxcr7PageRoutingModule
  ],
  declarations: [Boxcr7Page]
})
export class Boxcr7PageModule {}
