import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from 'app/@core/utils/service/breadcrumbs.service';
@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbsService) {}
  ngOnInit() {
    this.setBreadCrumbs();
  }
  setBreadCrumbs() {
    const breadcrumbs = [
      {
        name: 'Projects',
        link: '/projects',
      },
      {
        name: 'dashboard',
        link: 'null',
      },
    ];
    this.breadcrumbService.setBreadcrumbs(breadcrumbs);
  }

}
