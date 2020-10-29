import { Component, Optional, Inject } from '@angular/core';
import { Rubro } from 'src/app/core/models/articulos/rubro';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-supplies-categories-detail',
  templateUrl: './supplies-categories-detail.component.html',
  styleUrls: ['./supplies-categories-detail.component.scss']
})
export class SuppliesCategoriesDetailComponent {

  public localData: Rubro;

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: Rubro) {
    this.localData = { ...data };
  }

  getPublicClass(oculto: boolean) {
    return oculto ? 'private' : 'public';
  }

}
