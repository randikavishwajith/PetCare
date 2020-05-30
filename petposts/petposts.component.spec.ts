import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetpostsComponent } from './petposts.component';

describe('PetpostsComponent', () => {
  let component: PetpostsComponent;
  let fixture: ComponentFixture<PetpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
