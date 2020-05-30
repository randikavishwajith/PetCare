import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetregisterComponent } from './petregister.component';

describe('PetregisterComponent', () => {
  let component: PetregisterComponent;
  let fixture: ComponentFixture<PetregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
