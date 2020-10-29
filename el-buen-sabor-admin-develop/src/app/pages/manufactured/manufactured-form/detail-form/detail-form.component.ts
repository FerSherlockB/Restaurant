import { Component, OnInit, ViewChild, ElementRef, Optional, Inject, OnDestroy } from '@angular/core';
import { ArticuloInsumo } from 'src/app/core/models/articulos/articulo-insumo';
import { DetalleReceta } from 'src/app/core/models/articulos/detalle-receta';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AppEndpoints } from 'src/app/app-endpoints';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  public localData: DetalleReceta;
  public action: string;
  public detailForm: FormGroup;
  public filteredArticles: any = [];
  public isLoading = false;
  public errorMsg: string;

  get insumo(): ArticuloInsumo {
    return this.detailForm.get('insumo').value;
  }

  get unidad(): string {
    return this.insumo ? this.insumo.unidadMedida : '';
  }

  @ViewChild('input') input: ElementRef;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DetalleReceta,
    public dialogRef: MatDialogRef<DetailFormComponent>,
    public formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.localData = { ...data };
  }

  ngOnInit() {
    this.setAction();
    this.buildForm();
    this.filterArticle();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  buildForm() {
    this.detailForm = this.formBuilder.group({
      id: [this.localData.id],
      ultimaActualizacion: [this.localData.ultimaActualizacion],
      oculto: [this.localData.oculto ? this.localData.oculto : false],
      cantidad: [this.localData.cantidad, [Validators.required]],
      insumo: [this.localData.insumo, [Validators.required]]
    });
  }

  setAction() {
    this.action = (this.localData && (Object.keys(this.localData).length === 0)) ? 'Añadir' : 'Editar';
  }

  onAction() {
    this.dialogRef.close({ event: this.action, data: this.detailForm.value });
  }

  onCancel() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  errorHandling = (control: string, error: string) => {
    return this.detailForm.controls[control].hasError(error);
  }

  filterArticle() {
    this.subscription.add(this.detailForm.get('insumo').valueChanges.pipe(
      debounceTime(500), tap(() => {
        this.errorMsg = '';
        this.filteredArticles = [];
        this.isLoading = true;
      }),
      switchMap(value => {
        if (typeof value === 'string') {
          return this.http.get(`${AppEndpoints.SUPPLIES_ALL}?filter=${value}`)
            .pipe(finalize(() => { this.isLoading = false; }));
        } else {
          return this.http.get(`${AppEndpoints.SUPPLIES_ALL}`)
            .pipe(finalize(() => { this.isLoading = false; }));
        }
      }))
      .subscribe(data => {
        if (data === undefined) {
          this.errorMsg = 'Error';
          this.filteredArticles = [];
        } else {
          this.errorMsg = '';
          this.filteredArticles = data;
        }
      }));
  }

  displayArticle(object: ArticuloInsumo) {
    if (object) {
      return object.denominacion;
    } else {
      return '';
    }
  }

}
