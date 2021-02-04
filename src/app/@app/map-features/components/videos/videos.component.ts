import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MapFeaturesService } from '../../map-features.service';
import { BreadcrumbsService } from 'app/@core/utils/service/breadcrumbs.service';
import { ProjectsService } from 'app/@app/projects/projects.service';
import { GlobalService } from 'app/@core/utils/global.service';
@Component({
  selector: 'ngx-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  videos: any;
  chosenFilter: number = 4;
  projectId: any;
  assetId: any;
  projectName: string = '';
  assetName: string = '';
  dataLoaded: boolean = false;
  searchValue: string = '';
  videoItems = [
    { title: 'Rename' },
    { title: 'Share' },
    { title: 'Download' },
    { title: 'Delete' },
  ];
  constructor(
    private _mapFeature: MapFeaturesService,
    private datePipe: DatePipe,
    private _breadcrumbService: BreadcrumbsService,
    private _projectService: ProjectsService,
    private _globalService: GlobalService,
  ) {
    this.projectId = localStorage.getItem('currentProjectId');
    this.assetId = localStorage.getItem('currentAssetId');
    this.getProjectName(this.projectId);
    this.getAssetName(this.assetId);
    this.videos = [];
  }
  ngOnInit() {
    this.getVideos();
    this.sortTableByDate();
  }
  adjustDate(dateString) {
    const dateParsed = dateString.split('T')[0];
    return this.datePipe.transform(dateParsed, 'MM-dd-yyyy');
  }
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
        name: 'videos',
        link: 'null',
      },
    ];
    this._breadcrumbService.setBreadcrumbs(breadcrumbs);
  }
  sortTableByDate() {
    this.videos.sort((val1, val2) => {
      return val2.createdAt - val1.createdAt;
    });
  }
  getVideos() {
    this._mapFeature.getAssetFiles(this.assetId, 'video').subscribe((res) => {
      this.videos = res.data.items;
      this.dataLoaded = true;
    });
  }
  changed(type, value) {
    if (type === 'search') {
      this.searchValue = value;
      this.resultSearch();
    }
  }
  resultSearch() {
    this._globalService
      .Search(this.searchValue, `assets/${this.assetId}/files?type=video`)
      .subscribe((res) => {
        this.videos = res.data.items;
      });
  }
  oneChoosed() {
    this.chosenFilter = 1;
  }
  fourChoosed() {
    this.chosenFilter = 4;
  }
  nineChoosed() {
    this.chosenFilter = 9;
  }
}
