import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturedCategoriesDetailComponent } from './manufactured-categories-detail.component';

describe('ManufacturedCategoriesDetailComponent', () => {
  let component: ManufacturedCategoriesDetailComponent;
  let fixture: ComponentFixture<ManufacturedCategoriesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturedCategoriesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturedCategoriesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
