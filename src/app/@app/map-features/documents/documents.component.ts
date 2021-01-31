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
  chosenFilter: number = 4;
  documentsData: any;
  constructor(private _mapFeature: MapFeaturesService) {
    this.projectId = localStorage.getItem('currentProjectId');
    this.assetId = localStorage.getItem('currentAssetId');
    this.documentsData = [
      {
        name: 'Document1',
        description: 'document description',
        createdAt: '12-1-2021',
      },
      {
        name: 'Document2',
        description: 'document description',
        createdAt: '12-1-2021',
      },
      {
        name: 'Document2',
        description: 'document description',
        createdAt: '12-1-2021',
      },
      {
        name: 'Document5',
        description: 'document description',
        createdAt: '12-1-2021',
      },
      {
        name: 'Document6',
        description: 'document description',
        createdAt: '12-1-2021',
      },
      {
        name: 'Document7',
        description: 'document description',
        createdAt: '12-1-2021',
      },
    ];
  }

  ngOnInit(): void {
    this.getDocuments();
  }
  getDocuments() {
    // console.log(localStorage.getItem('satellizer_token'));

    this._mapFeature
      .getAssetFiles(this.assetId, 'document')
      .subscribe((res) => {
        // console.log(res);
      });
  }
  fourChoosed() {
    this.chosenFilter = 4;
  }
  oneChoosed() {
    this.chosenFilter = 1;
  }
}
