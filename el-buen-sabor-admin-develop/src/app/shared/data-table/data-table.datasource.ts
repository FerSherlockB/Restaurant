import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { DataTableService } from './data-table.service';

export class TableDataSource implements DataSource<any> {

  private tableSubject = new BehaviorSubject<any[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public lengthSubject = new BehaviorSubject<number>(null);
  public loading$ = this.loadingSubject.asObservable();
  public length$ = this.lengthSubject.asObservable();

  constructor(private dataTableService: DataTableService) { }

  loadAll(path: string, filter: string, page: number, size: number, sortBy?: string, direction?: string) {
    this.loadingSubject.next(true);

    this.dataTableService.findAll(path, filter, page, size, sortBy, direction)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false)))
      .subscribe((response) => {
        this.lengthSubject.next(response['length']);
        return this.tableSubject.next(response['payload']);
      });
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.tableSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.tableSubject.complete();
    this.loadingSubject.complete();
  }

}
