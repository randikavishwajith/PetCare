import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PUpdateProfileComponent } from './p-update-profile.component';

describe('PUpdateProfileComponent', () => {
  let component: PUpdateProfileComponent;
  let fixture: ComponentFixture<PUpdateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PUpdateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
