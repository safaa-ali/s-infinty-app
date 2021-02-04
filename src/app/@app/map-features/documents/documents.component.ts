import { Component, OnInit } from '@angular/core';
import { MapFeaturesService } from '../map-features.service';
import { DatePipe } from '@angular/common';
import { GlobalService } from 'app/@core/utils/global.service';
import { BreadcrumbsService } from 'app/@core/utils/service/breadcrumbs.service';
import { ProjectsService } from 'app/@app/projects/projects.service';
@Component({
  selector: 'ngx-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  projectId: any;
  assetId: any;
  chosenFilter: number = 4;
  documentsData: any;
  searchValue: string = '';
  projectName: string = '';
  assetName: string = '';
  items = [{ title: 'Rename' }, { title: 'Share' }, { title: 'Download' }];
  constructor(
    private _mapFeature: MapFeaturesService,
    private datePipe: DatePipe,
    private _globalService: GlobalService,
    private _breadcrumbService: BreadcrumbsService,
    private _projectService: ProjectsService,
  ) {
    this.documentsData = [];
  }
  convertToDate(dateString) {
    return typeof new Date(dateString);
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
      this.setBreadCrumbs() ;
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
        name: 'documents',
        link: 'null',
      },
    ];
    this._breadcrumbService.setBreadcrumbs(breadcrumbs);
  }
  ngOnInit(): void {
    this.projectId = localStorage.getItem('currentProjectId');
    this.getProjectName(this.projectId);
    this.assetId = localStorage.getItem('currentAssetId');
    this.getAssetName(this.assetId);
    // this.assetName = localStorage.getItem('currentAssetName');
    this.getDocuments();
    this.sortTableByDate();
    // console.log(this.assetName);
  }
  adjustDate(dateString) {
    const dateParsed = dateString.split('T')[0];
    return this.datePipe.transform(dateParsed, 'MM-dd-yyyy');
  }
  sortTableByDate() {
    this.documentsData.sort((val1, val2) => {
      return val2.createdAt - val1.createdAt;
    });
  }
  getDocuments() {
    this._mapFeature
      .getAssetFiles(this.assetId, 'document')
      .subscribe((res) => {
        this.documentsData = res.data.items;
      });
  }
  changed(type, value) {
    if (type === 'search') {
      this.searchValue = value;
      this.resultSearch();
    }
  }
  resultSearch() {
    this._globalService.Search(this.searchValue, `assets/${this.assetId}/files?type=document`).subscribe((res) => {
    this.documentsData = res.data.items;
    });
  }
  fourChoosed() {
    this.chosenFilter = 4;
  }
  oneChoosed() {
    this.chosenFilter = 1;
  }
}
