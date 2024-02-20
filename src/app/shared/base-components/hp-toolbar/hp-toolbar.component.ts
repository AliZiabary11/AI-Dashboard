import { Component, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'hp-toolbar',
  templateUrl: './hp-toolbar.component.html',
  styleUrls: ['./hp-toolbar.component.scss'],
changeDetection:ChangeDetectionStrategy.OnPush
})
export class HpToolbarComponent {
  @Output() ngModelChange: EventEmitter<string> = new EventEmitter<string>();
  public ngModelValue: string = '';
  @Input()
  get ngModel(): string {
    return this.ngModelValue;
  }
  set ngModel(v: string) {
    this.ngModelValue = v;
    this.ngModelChange.emit(v);
  }

  @Output() onInsertClick = new EventEmitter();
  @Output() onEditClick = new EventEmitter();
  @Output() onDeleteClick = new EventEmitter();
  @Output() onRefreshClick = new EventEmitter();
  @Output() onSearchClick = new EventEmitter();
  @Output() onSearchBoxEnterKeyDown = new EventEmitter();



}
