import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturedTableComponent } from './manufactured-table.component';

describe('ManufacturedTableComponent', () => {
  let component: ManufacturedTableComponent;
  let fixture: ComponentFixture<ManufacturedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
