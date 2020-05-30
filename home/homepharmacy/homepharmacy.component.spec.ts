import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepharmacyComponent } from './homepharmacy.component';

describe('HomepharmacyComponent', () => {
  let component: HomepharmacyComponent;
  let fixture: ComponentFixture<HomepharmacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepharmacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
