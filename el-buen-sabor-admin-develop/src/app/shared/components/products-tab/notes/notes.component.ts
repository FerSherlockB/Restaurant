import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input()
  public data: string;

  get notes() {
    return this.data ? this.data : 'Este pedido no tiene aclaraciones...';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
