import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EquipamentosAdultoPage } from './equipamentos-adulto.page';

describe('EquipamentosAdultoPage', () => {
  let component: EquipamentosAdultoPage;
  let fixture: ComponentFixture<EquipamentosAdultoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipamentosAdultoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EquipamentosAdultoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
