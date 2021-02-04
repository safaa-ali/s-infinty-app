import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { ProjectsService } from '../projects/projects.service';
import { map_menu } from './map-menu';
@Component({
  selector: 'ngx-map-features',
  templateUrl: './map-features-component.html',
  styleUrls: ['./map-features.component.scss'],
})
export class MapFeaturesComponent implements OnInit {
  menu: NbMenuItem[];
  constructor(
    private activateroute: ActivatedRoute,
    private _projectService: ProjectsService,
  ) {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      window.location.reload();
    } else {
      localStorage.removeItem('foo');
    }
  }
  ngOnInit(): void {
    this.activateroute.params.subscribe((params) => {
      localStorage.setItem('currentProjectId', params['projectId']);
      localStorage.setItem('currentAssetId', params['assetId']);
      this.getProjectName(params['projectId']);
      this.getAssetName(params['assetId']);
    });
  }
  getProjectName(id) {
    this._projectService.showProject(id).subscribe((res) => {
      localStorage.setItem('currentProjectName', `${res.data.name}`);
    });
  }
  getAssetName(id) {
    this._projectService.showAsset(id).subscribe((res) => {
      localStorage.setItem('currentAssetName', `${res.data.name}`);
    });
  }
  Menu = map_menu;
}
