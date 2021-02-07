import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'app/@app/projects/projects.service';
import { GlobalService } from 'app/@core/utils/global.service';
import { BreadcrumbsService } from 'app/@core/utils/service/breadcrumbs.service';
import { MapFeaturesService } from '../../map-features.service';
import { NbMenuService } from '@nebular/theme';
import { AuthService } from 'app/@core/utils/auth.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'ngx-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  images: any;
  chosenFilter: number = 4;
  projectId: any;
  projectName: string;
  assetName: string;
  assetId: any;
  searchValue: string = '';
  dataLoaded: boolean = false;
  imageItems = [
    { title: 'Rename' },
    { title: 'Share' },
    { title: 'Download' },
    { title: 'Delete' },
  ];
  logoutitems = [{ title: 'Logout', icon: 'log-out', pack: 'eva' }];
  constructor(
    private _mapFeature: MapFeaturesService,
    private datePipe: DatePipe,
    private _globalService: GlobalService,
    private _breadcrumbService: BreadcrumbsService,
    private _projectService: ProjectsService,
    private nbMenuService: NbMenuService,
    private _authService: AuthService,
  ) {
    this.projectId = localStorage.getItem('currentProjectId');
    this.assetId = localStorage.getItem('currentAssetId');
    this.getProjectName(this.projectId);
    this.getAssetName(this.assetId);
    this.images = [];
  }
  ngOnInit() {
    this.nbMenuService
      .onItemClick()
      .pipe(map(({ item: { title } }) => title))
      .subscribe((title) => {
        if (title === 'Logout') {
          this._authService.logout();
        }
      });
    this.getImages();
    this.sortTableByDate();
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
        name: 'images',
        link: 'null',
      },
    ];
    this._breadcrumbService.setBreadcrumbs(breadcrumbs);
  }
  adjustDate(dateString) {
    const dateParsed = dateString.split('T')[0];
    return this.datePipe.transform(dateParsed, 'MM-dd-yyyy');
  }
  sortTableByDate() {
    this.images.sort((val1, val2) => {
      return val2.createdAt - val1.createdAt;
    });
  }
  getImages() {
    this._mapFeature.getAssetFiles(this.assetId, 'image').subscribe((res) => {
      this.images = res.data.items;
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
      .Search(this.searchValue, `assets/${this.assetId}/files?type=image`)
      .subscribe((res) => {
        this.images = res.data.items;
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
