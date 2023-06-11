import { Component, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonMenu, { static: true }) menu!: IonMenu;

  constructor() {}

  closeMenu() {
    this.menu.close();
  }
}
