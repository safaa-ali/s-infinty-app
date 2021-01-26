import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {

  @Output() valueChanged = new EventEmitter<string>();
  searchValue: string = '';
  @Input() placeholderText: string;
  private searchDelay;
  private delayTime = 1000;

  constructor() { }

  onSearchHandler() {
    this.cancelEmit();
    this.emitIt();
  }

  emitIt() {
    this.searchDelay = setTimeout(() => { this.valueChanged.emit(this.searchValue); }, this.delayTime);
    console.log(this.searchValue);

  }

  cancelEmit() {
    clearTimeout(this.searchDelay);
  }
}
