import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Empleado } from 'src/app/core/models/usuarios/empleado';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employees-detail',
  templateUrl: './employees-detail.component.html',
  styleUrls: ['./employees-detail.component.scss']
})
export class EmployeesDetailComponent implements OnInit {

  public localData: Empleado;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Empleado,
    public dialogRef: MatDialogRef<EmployeesDetailComponent>
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
  }

}
