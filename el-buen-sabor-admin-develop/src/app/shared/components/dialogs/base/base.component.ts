import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {

  @Input()
  public title = 'Title';

}
