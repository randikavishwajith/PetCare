import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserclinicsComponent } from './userclinics.component';

describe('UserclinicsComponent', () => {
  let component: UserclinicsComponent;
  let fixture: ComponentFixture<UserclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
