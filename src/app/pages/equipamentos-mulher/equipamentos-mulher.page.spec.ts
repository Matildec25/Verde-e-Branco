import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EquipamentosMulherPage } from './equipamentos-mulher.page';

describe('EquipamentosMulherPage', () => {
  let component: EquipamentosMulherPage;
  let fixture: ComponentFixture<EquipamentosMulherPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipamentosMulherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EquipamentosMulherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
