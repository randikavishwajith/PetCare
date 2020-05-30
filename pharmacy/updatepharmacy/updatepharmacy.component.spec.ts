import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepharmacyComponent } from './updatepharmacy.component';

describe('UpdatepharmacyComponent', () => {
  let component: UpdatepharmacyComponent;
  let fixture: ComponentFixture<UpdatepharmacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepharmacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
