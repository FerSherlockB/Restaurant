import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierDetailComponent } from './cashier-detail.component';

describe('CashierDetailComponent', () => {
  let component: CashierDetailComponent;
  let fixture: ComponentFixture<CashierDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
