import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EquipamentosAcessoriosPage } from './equipamentos-acessorios.page';

describe('EquipamentosAcessoriosPage', () => {
  let component: EquipamentosAcessoriosPage;
  let fixture: ComponentFixture<EquipamentosAcessoriosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipamentosAcessoriosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EquipamentosAcessoriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
