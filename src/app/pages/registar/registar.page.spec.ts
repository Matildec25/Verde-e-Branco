import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { RegistarPage } from './registar.page';

describe('Tab5Page', () => {
  let component: RegistarPage;
  let fixture: ComponentFixture<RegistarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistarPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
