import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetMedicineHistoryComponent } from './pet-medicine-history.component';

describe('PetMedicineHistoryComponent', () => {
  let component: PetMedicineHistoryComponent;
  let fixture: ComponentFixture<PetMedicineHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetMedicineHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetMedicineHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
