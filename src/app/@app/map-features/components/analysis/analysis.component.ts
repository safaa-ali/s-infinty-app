import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'app/@app/projects/projects.service';
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
  constructor(
    private _breadcrumbService: BreadcrumbsService,
    private _projectService: ProjectsService,
  ) {
    this.projectId = localStorage.getItem('currentProjectId');
    this.assetId = localStorage.getItem('currentAssetId');
    this.getProjectName(this.projectId);
    this.getAssetName(this.assetId);
  }
  ngOnInit() {}
  getProjectName(id) {
    this._projectService.showProject(id).subscribe((res) => {
      this.projectName = res.data.name;
      this.setBreadCrumbs();
    });
  }
  getAssetName(id) {
    this._projectService.showAsset(id).subscribe((res) => {
      this.assetName = res.data.name;
      this.setBreadCrumbs();
    });
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
