import { Component, Optional, Inject } from '@angular/core';
import { Categoria } from 'src/app/core/models/articulos/categoria';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-manufactured-categories-detail',
  templateUrl: './manufactured-categories-detail.component.html',
  styleUrls: ['./manufactured-categories-detail.component.scss']
})
export class ManufacturedCategoriesDetailComponent {

  public localData: Categoria;

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: Categoria) {
    this.localData = { ...data };
  }

  getPublicClass(oculto: boolean) {
    return oculto ? 'private' : 'public';
  }

}
