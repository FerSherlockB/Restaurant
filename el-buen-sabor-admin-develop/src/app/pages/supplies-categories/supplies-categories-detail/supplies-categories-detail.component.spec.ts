import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesCategoriesDetailComponent } from './supplies-categories-detail.component';

describe('SuppliesCategoriesDetailComponent', () => {
  let component: SuppliesCategoriesDetailComponent;
  let fixture: ComponentFixture<SuppliesCategoriesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliesCategoriesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliesCategoriesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
