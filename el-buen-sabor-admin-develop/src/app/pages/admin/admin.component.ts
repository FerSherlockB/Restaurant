import { Component, OnInit } from '@angular/core';
import { ModeloGrafico } from 'src/app/core/models/reportes/modelo-grafico';
import { ReportsService } from 'src/app/shared/services/reports.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ExcelService } from 'src/app/shared/services/excel.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  stock: ModeloGrafico[];
  stockLength = 0;
  stockHeaders = ['Producto', 'Stock Actual'];

  ingresos: ModeloGrafico[];
  ingresosHeaders = ['', ''];

  insumosMasVendidos: ModeloGrafico[];
  insumosLength = 0;

  manufacturadosMasVendidos: ModeloGrafico[];
  manufacturadosLength = 0;

  productosHeaders = ['Nombre producto', 'Stock actual'];

  ordenesPorCliente: ModeloGrafico[];
  ordenesLength = 0;
  ordenesHeaders = ['Email Cliente', 'Cant. ordenes realizadas'];

  periodoIngresos: string;
  periodoInsumos: string;
  periodoManufacturados: string;
  periodoOrdenes: string;

  datesForm: FormGroup;

  ingresosColorScheme = {
    domain: ['#ffc107', '#ffa000']
  };

  masVendidosColorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(
    private resportsService: ReportsService,
    private fb: FormBuilder,
    private excelService: ExcelService
  ) {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth(), this.daysInMonth(date.getMonth() + 1, date.getFullYear()));
    this.datesForm = fb.group({ date: [{ begin: firstDay, end: lastDay }] });
  }

  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  ngOnInit(): void {
    this.getInsumosStock();
    this.getIngresos();
    this.getTopInsumos();
    this.getTopManufacturados();
  }

  getInsumosStock() {
    this.resportsService.getInsumosOutOfStock().subscribe(
      res => {
        this.stock = res;
        this.stockLength = this.stock.length;
      }
    );
  }

  getIngresos() {
    const fechaInicio: Date = this.datesForm.get('date').value.begin;
    const fechaFin: Date = this.datesForm.get('date').value.end;
    this.resportsService.getIngresosPorPeriodo(fechaInicio, fechaFin).subscribe(
      res => {
        this.periodoIngresos = fechaInicio.toISOString().slice(0, 10) + ' hasta ' + fechaFin.toISOString().slice(0, 10);
        this.ingresos = res;
      }
    );
  }

  getTopInsumos() {
    const fechaInicio: Date = this.datesForm.get('date').value.begin;
    const fechaFin: Date = this.datesForm.get('date').value.end;
    this.resportsService.getTopInsumos(fechaInicio, fechaFin).subscribe(
      res => {
        this.periodoInsumos = fechaInicio.toISOString().slice(0, 10) + ' hasta ' + fechaFin.toISOString().slice(0, 10);
        this.insumosMasVendidos = res;
        this.insumosLength = this.insumosMasVendidos.length;
      }
    );
  }

  getTopManufacturados() {
    const fechaInicio: Date = this.datesForm.get('date').value.begin;
    const fechaFin: Date = this.datesForm.get('date').value.end;
    this.resportsService.getTopManufacturados(fechaInicio, fechaFin).subscribe(
      res => {
        this.periodoManufacturados = fechaInicio.toISOString().slice(0, 10) + ' hasta ' + fechaFin.toISOString().slice(0, 10);
        this.manufacturadosMasVendidos = res;
        this.manufacturadosLength = this.manufacturadosMasVendidos.length;
      }
    );
  }

  getOrdenesPorCliente() {
    const fechaInicio: Date = this.datesForm.get('date').value.begin;
    const fechaFin: Date = this.datesForm.get('date').value.end;
    this.resportsService.getOrdenesPorCliente(fechaInicio, fechaFin).subscribe(
      res => {
        this.periodoOrdenes = fechaInicio.toISOString().slice(0, 10) + ' hasta ' + fechaFin.toISOString().slice(0, 10);
        this.ordenesPorCliente = res;
        this.ordenesLength = this.ordenesPorCliente.length;
      }
    );
  }

  onDownloadData(data: any[], name: string, headersGrafico: string[], fechas: string) {
    console.log(data);

    const dataForExcel = [];

    data.forEach((row: any) => {
      dataForExcel.push(Object.values(row));
    });

    const reportData = {
      title: name,
      data: dataForExcel,
      headers: headersGrafico,
      periodo: fechas
    };

    this.excelService.exportExcel(reportData);
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  format(c): string {
    switch (c.label) {
      case 'INGRESOS':
        return `\$${c.value.toLocaleString()}`;
      default:
        return c.value.toLocaleString();
    }
  }
}
