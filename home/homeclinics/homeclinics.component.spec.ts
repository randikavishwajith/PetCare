import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeclinicsComponent } from './homeclinics.component';

describe('HomeclinicsComponent', () => {
  let component: HomeclinicsComponent;
  let fixture: ComponentFixture<HomeclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
