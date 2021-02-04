import { Component, OnInit } from '@angular/core';
import { MapFeaturesService } from '../map-features.service';
import { DatePipe } from '@angular/common';
import { GlobalService } from 'app/@core/utils/global.service';
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
  items = [{ title: 'Rename' }, { title: 'Share' }, { title: 'Download' }];
  constructor(
    private _mapFeature: MapFeaturesService,
    private datePipe: DatePipe,
    private _globalService: GlobalService,
  ) {
    this.projectId = localStorage.getItem('currentProjectId');
    this.assetId = localStorage.getItem('currentAssetId');
    this.documentsData = [];
  }
  convertToDate(dateString) {
    return typeof new Date(dateString);
  }
  ngOnInit(): void {
    this.getDocuments();
    this.sortTableByDate();
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
