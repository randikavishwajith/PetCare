import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpharmaciesComponent } from './userpharmacies.component';

describe('UserpharmaciesComponent', () => {
  let component: UserpharmaciesComponent;
  let fixture: ComponentFixture<UserpharmaciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpharmaciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpharmaciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
