import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EquipamentosCriancaPage } from './equipamentos-crianca.page';

describe('EquipamentosCriancaPage', () => {
  let component: EquipamentosCriancaPage;
  let fixture: ComponentFixture<EquipamentosCriancaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipamentosCriancaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EquipamentosCriancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
