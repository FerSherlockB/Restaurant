import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesCategoriesTableComponent } from './supplies-categories-table.component';

describe('SuppliesCategoriesTableComponent', () => {
  let component: SuppliesCategoriesTableComponent;
  let fixture: ComponentFixture<SuppliesCategoriesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliesCategoriesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliesCategoriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
