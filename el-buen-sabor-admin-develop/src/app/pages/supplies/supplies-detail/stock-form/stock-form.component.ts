import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ArticuloInsumo } from 'src/app/core/models/articulos/articulo-insumo';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SupplyService } from 'src/app/shared/services/supply.service';
@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss']
})
export class StockFormComponent implements OnInit {

  public unidadMedida: string;
  public stockForm: FormGroup;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: string,
    public dialogRef: MatDialogRef<StockFormComponent>,
    public formBuilder: FormBuilder,
    public supplyService: SupplyService
  ) {
    this.unidadMedida = data;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.stockForm = this.formBuilder.group({
      cantidad: ['', [Validators.required]],
    });
  }

  onAction() {
    this.dialogRef.close({ event: 'Añadir', data: this.stockForm.value });
  }

  errorHandling = (control: string, error: string) => {
    return this.stockForm.controls[control].hasError(error);
  }

}
