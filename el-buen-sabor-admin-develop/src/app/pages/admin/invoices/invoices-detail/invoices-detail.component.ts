import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Factura } from 'src/app/core/models/comprobantes/factura';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invoices-detail',
  templateUrl: './invoices-detail.component.html',
  styleUrls: ['./invoices-detail.component.scss']
})
export class InvoicesDetailComponent implements OnInit {

  public localData: Factura;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Factura,
    public dialogRef: MatDialogRef<InvoicesDetailComponent>
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
  }

}
