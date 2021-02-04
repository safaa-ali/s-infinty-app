import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from 'app/@core/utils/service/breadcrumbs.service';

@Component({
  selector: 'ngx-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent implements OnInit {
  projectId: any;
  assetId: any;
  projectName: string = '';
  assetName: string = '';
  constructor(private _breadcrumbService: BreadcrumbsService) {
    this.projectId = localStorage.getItem('currentProjectId');
    this.assetId = localStorage.getItem('currentAssetId');
    this.projectName = localStorage.getItem('currentProjectName');
    this.assetName = localStorage.getItem('currentAssetName');
  }
  ngOnInit() {
    this.setBreadCrumbs();
  }
  setBreadCrumbs() {
    const breadcrumbs = [
      {
        name: 'projects',
        link: 'projects',
      },
      {
        name: `${this.projectName}`,
        link: `projects/${this.projectId}`,
      },
      {
        name: `${this.assetName}`,
        link: `projects/${this.projectId}/assets/${this.assetId}`,
      },
      {
        name: 'analysis',
        link: 'null',
      },
    ];
    this._breadcrumbService.setBreadcrumbs(breadcrumbs);
  }
}
