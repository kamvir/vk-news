import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EverythingPage } from './everything.page';

describe('EverythingPage', () => {
  let component: EverythingPage;
  let fixture: ComponentFixture<EverythingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EverythingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EverythingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
