import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UslugaCardComponent } from './usluga-card.component';

describe('UslugaCardComponent', () => {
  let component: UslugaCardComponent;
  let fixture: ComponentFixture<UslugaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UslugaCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UslugaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
