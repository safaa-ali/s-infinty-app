import { EventEmitter, Injectable, Output } from '@angular/core';
import { Breadcrumb } from 'app/@core/data/breadcrumb';
@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  public breadcrumbs: Breadcrumb[];
  @Output() breadcrumbsChanged = new EventEmitter<Breadcrumb[]>();
  @Output() breadcrumbsClicked = new EventEmitter<Breadcrumb>();
  constructor() {}
  setBreadcrumbs(breadcrumbs: Breadcrumb[]) {
    this.breadcrumbs = breadcrumbs;
    this.breadcrumbsChanged.emit(this.breadcrumbs);
  }
  returnBreadcrumbs() {
    return this.breadcrumbs;
  }
}
