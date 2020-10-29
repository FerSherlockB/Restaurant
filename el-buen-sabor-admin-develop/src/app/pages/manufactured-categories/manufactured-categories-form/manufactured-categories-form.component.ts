import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Categoria } from 'src/app/core/models/articulos/categoria';

@Component({
  selector: 'app-manufactured-categories-form',
  templateUrl: './manufactured-categories-form.component.html',
  styleUrls: ['./manufactured-categories-form.component.scss']
})
export class ManufacturedCategoriesFormComponent implements OnInit {

  public localData: Categoria;
  public action: string;
  public manufacturedCategoriesForm: FormGroup;

  get imagen(): FormControl {
    return this.manufacturedCategoriesForm.get('imagen') as FormControl;
  }

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Categoria,
    private dialogRef: MatDialogRef<ManufacturedCategoriesFormComponent>,
    private formBuilder: FormBuilder
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
    this.buildForm();
    this.setAction();
  }

  buildForm() {
    this.manufacturedCategoriesForm = this.formBuilder.group({
      id: [this.localData.id],
      ultimaActualizacion: [this.localData.ultimaActualizacion],
      oculto: [this.localData.oculto],
      denominacion: [this.localData.denominacion, [Validators.required]],
      imagen: [this.localData.imagen, [Validators.required]]
    });
  }

  setAction() {
    this.action = (this.localData && (Object.keys(this.localData).length === 0)) ? 'Añadir' : 'Editar';
  }

  onAction() {
    this.dialogRef.close({ event: this.action, data: this.manufacturedCategoriesForm.value });
  }

  errorHandling = (control: string, error: string) => {
    return this.manufacturedCategoriesForm.controls[control].hasError(error);
  }

}
