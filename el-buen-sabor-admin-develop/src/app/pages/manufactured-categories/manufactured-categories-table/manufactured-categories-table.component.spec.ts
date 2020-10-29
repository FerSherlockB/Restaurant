import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturedCategoriesTableComponent } from './manufactured-categories-table.component';

describe('ManufacturedCategoriesTableComponent', () => {
  let component: ManufacturedCategoriesTableComponent;
  let fixture: ComponentFixture<ManufacturedCategoriesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturedCategoriesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturedCategoriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
