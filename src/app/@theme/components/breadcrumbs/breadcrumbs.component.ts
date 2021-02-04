import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbsService } from 'app/@core/utils/service/breadcrumbs.service';
import { Breadcrumb } from 'app/@core/data/breadcrumb';
import { Subject } from 'rxjs';
@Component({
  selector: 'ngx-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy, OnChanges {

  breadcrumbs: Breadcrumb[];
  userPictureOnly: boolean = false;
  user: any;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private breadcrumbsService: BreadcrumbsService) {
  }

  ngOnInit() {
    this.breadcrumbs = this.breadcrumbsService.returnBreadcrumbs();
    this.breadcrumbsService.breadcrumbsChanged.subscribe(
      (breadcrumbs: Breadcrumb[]) => {
        this.breadcrumbs = breadcrumbs;
      },
    );
  }

  ngOnChanges() {
   this.breadcrumbs = this.breadcrumbsService.returnBreadcrumbs();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
