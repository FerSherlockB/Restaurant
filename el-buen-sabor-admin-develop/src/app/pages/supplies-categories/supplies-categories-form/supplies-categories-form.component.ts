import { Component, OnInit, OnDestroy, Optional, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Rubro } from 'src/app/core/models/articulos/rubro';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AppEndpoints } from 'src/app/app-endpoints';

@Component({
  selector: 'app-supplies-categories-form',
  templateUrl: './supplies-categories-form.component.html',
  styleUrls: ['./supplies-categories-form.component.scss']
})
export class SuppliesCategoriesFormComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  public rubros: Array<Rubro>;
  public localData: Rubro;
  public action: string;
  public suppliesCategoriesForm: FormGroup;

  get imagen(): FormControl {
    return this.suppliesCategoriesForm.get('imagen') as FormControl;
  }

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Rubro,
    private dialogRef: MatDialogRef<SuppliesCategoriesFormComponent>,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
    this.buildForm();
    this.setAction();
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  buildForm() {
    this.suppliesCategoriesForm = this.formBuilder.group({
      id: [this.localData.id],
      ultimaActualizacion: [this.localData.ultimaActualizacion],
      oculto: [this.localData.oculto],
      denominacion: [this.localData.denominacion, [Validators.required]],
      rubroPadre: [this.localData.rubroPadre],
      imagen: [this.localData.imagen]
    });
  }

  getCategories() {
    this.subscription.add(this.http.get(AppEndpoints.RUBROS_ALL).pipe()
      .subscribe((data: Array<Rubro>) => {
        if (this.action === 'Editar') {
          return this.rubros = data.filter((rubro: Rubro) => rubro.id !== this.localData.id);
        } else {
          return this.rubros = data;
        }
      }));
  }

  setAction() {
    this.action = (this.localData && (Object.keys(this.localData).length === 0)) ? 'Añadir' : 'Editar';
  }

  onAction() {
    this.dialogRef.close({ event: this.action, data: this.suppliesCategoriesForm.value });
  }

  errorHandling = (control: string, error: string) => {
    return this.suppliesCategoriesForm.controls[control].hasError(error);
  }

  compareWith(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

}
