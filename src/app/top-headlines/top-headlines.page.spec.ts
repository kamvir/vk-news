import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopHeadlinesPage } from './top-headlines.page';

describe('TopHeadlinesPage', () => {
  let component: TopHeadlinesPage;
  let fixture: ComponentFixture<TopHeadlinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHeadlinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopHeadlinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
