import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAdverticeComponent } from './p-advertice.component';

describe('PAdverticeComponent', () => {
  let component: PAdverticeComponent;
  let fixture: ComponentFixture<PAdverticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAdverticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAdverticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
