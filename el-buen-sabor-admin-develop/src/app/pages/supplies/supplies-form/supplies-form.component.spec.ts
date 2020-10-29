import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesFormComponent } from './supplies-form.component';

describe('SuppliesFormComponent', () => {
  let component: SuppliesFormComponent;
  let fixture: ComponentFixture<SuppliesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
