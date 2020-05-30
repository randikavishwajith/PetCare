import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsellComponent } from './petsell.component';

describe('PetsellComponent', () => {
  let component: PetsellComponent;
  let fixture: ComponentFixture<PetsellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
