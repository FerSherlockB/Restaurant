import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesDetailComponent } from './supplies-detail.component';

describe('SuppliesDetailComponent', () => {
  let component: SuppliesDetailComponent;
  let fixture: ComponentFixture<SuppliesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
