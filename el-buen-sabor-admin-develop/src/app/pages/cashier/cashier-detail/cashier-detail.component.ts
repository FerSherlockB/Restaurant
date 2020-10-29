import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Orden } from 'src/app/core/models/comprobantes/orden';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Estado } from 'src/app/core/models/comprobantes/estado';

@Component({
  selector: 'app-cashier-detail',
  templateUrl: './cashier-detail.component.html',
  styleUrls: ['./cashier-detail.component.scss']
})
export class CashierDetailComponent implements OnInit {

  public localData: Orden;
  public statuses: Array<Estado>;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Orden,
    public dialogRef: MatDialogRef<CashierDetailComponent>
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
  }

}
