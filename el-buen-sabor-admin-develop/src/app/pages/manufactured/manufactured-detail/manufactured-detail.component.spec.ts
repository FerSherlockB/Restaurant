import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturedDetailComponent } from './manufactured-detail.component';

describe('ManufacturedDetailComponent', () => {
  let component: ManufacturedDetailComponent;
  let fixture: ComponentFixture<ManufacturedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
