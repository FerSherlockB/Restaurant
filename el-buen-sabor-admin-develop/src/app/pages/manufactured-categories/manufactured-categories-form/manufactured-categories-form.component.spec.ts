import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturedCategoriesFormComponent } from './manufactured-categories-form.component';

describe('ManufacturedCategoriesFormComponent', () => {
  let component: ManufacturedCategoriesFormComponent;
  let fixture: ComponentFixture<ManufacturedCategoriesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturedCategoriesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturedCategoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
