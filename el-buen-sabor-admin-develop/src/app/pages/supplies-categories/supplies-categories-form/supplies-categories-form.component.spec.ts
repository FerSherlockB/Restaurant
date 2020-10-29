import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesCategoriesFormComponent } from './supplies-categories-form.component';

describe('SuppliesCategoriesFormComponent', () => {
  let component: SuppliesCategoriesFormComponent;
  let fixture: ComponentFixture<SuppliesCategoriesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliesCategoriesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliesCategoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
