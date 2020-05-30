import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VAdverticeComponent } from './v-advertice.component';

describe('VAdverticeComponent', () => {
  let component: VAdverticeComponent;
  let fixture: ComponentFixture<VAdverticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VAdverticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VAdverticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
