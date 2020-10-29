import { Component, Optional, Inject, OnDestroy } from '@angular/core';
import { ArticuloInsumo } from 'src/app/core/models/articulos/articulo-insumo';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { StockFormComponent } from './stock-form/stock-form.component';
import { SupplyService } from 'src/app/shared/services/supply.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-supplies-detail',
  templateUrl: './supplies-detail.component.html',
  styleUrls: ['./supplies-detail.component.scss']
})
export class SuppliesDetailComponent implements OnDestroy {

  private subscription: Subscription = new Subscription();
  public localData: ArticuloInsumo;
  public displayedColumns = ['fechaMovimiento', 'cantidad', 'operacion'];

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ArticuloInsumo,
    private matDialog: MatDialog,
    private supplyService: SupplyService
  ) {
    this.localData = { ...data };
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddStock() {
    this.matDialog.open(StockFormComponent, {
      panelClass: 'app-dialog',
      data: this.localData.unidadMedida
    }).afterClosed().subscribe(result => {
      if (result.event === 'Añadir') {
        this.addStock(result.data);
      }
    });
  }

  addStock(data: any) {
    this.subscription.add(this.supplyService.addStock(this.localData.id, data.cantidad)
      .subscribe(res => this.localData = res));
  }

  getPublicClass() {
    return this.localData.oculto ? 'private' : 'public';
  }

}
