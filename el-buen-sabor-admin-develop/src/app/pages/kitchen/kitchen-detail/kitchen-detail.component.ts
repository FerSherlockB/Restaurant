import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Orden } from 'src/app/core/models/comprobantes/orden';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Estado } from 'src/app/core/models/comprobantes/estado';
import { HttpClient } from '@angular/common/http';
import { AppEndpoints } from 'src/app/app-endpoints';

@Component({
  selector: 'app-kitchen-detail',
  templateUrl: './kitchen-detail.component.html',
  styleUrls: ['./kitchen-detail.component.scss']
})
export class KitchenDetailComponent implements OnInit {

  public localData: Orden;
  public statuses: Array<Estado>;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Orden,
    public dialogRef: MatDialogRef<KitchenDetailComponent>,
    private http: HttpClient
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
    this.getStatuses();
  }

  getStatuses() {
    return this.http.get(AppEndpoints.STATUS_ALL).pipe()
      .subscribe((data: Array<Estado>) => this.statuses = data
        .filter(status => status.denominacion === 'demorado' || status.denominacion === 'listo'));
  }

}
