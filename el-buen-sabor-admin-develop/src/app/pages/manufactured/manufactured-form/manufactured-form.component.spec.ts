import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturedFormComponent } from './manufactured-form.component';

describe('ManufacturedFormComponent', () => {
  let component: ManufacturedFormComponent;
  let fixture: ComponentFixture<ManufacturedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
