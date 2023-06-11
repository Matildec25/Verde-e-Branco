import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab4Page } from './tab4.page';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule,
  ],
  exports: [RouterModule]
})
export class Tab4PageRoutingModule { }
