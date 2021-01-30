import { Component, OnInit } from '@angular/core';
import { MapFeaturesService } from '../map-features.service';

@Component({
  selector: 'ngx-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  projectId: any;
  assetId: any;
  constructor(private _mapFeature: MapFeaturesService) {
    this.projectId = localStorage.getItem('currentProjectId');
    this.assetId = localStorage.getItem('currentAssetId');
  }

  ngOnInit(): void {
    this.getDocuments();
  }
  getDocuments() {
    // console.log(localStorage.getItem('satellizer_token'));

    this._mapFeature.getAssetFiles(this.assetId, 'document').subscribe(res => {
      // console.log(res);
    });
  }
}
