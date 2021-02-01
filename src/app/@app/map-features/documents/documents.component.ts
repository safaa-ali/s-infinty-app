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
  items = [
    // { icon: { icon: "more-horizontal-outline", pack: "eva" } },
    { title: 'Rename' },
    { title: 'Share' },
    { title: 'Download' },
  ];
  constructor(private _mapFeature: MapFeaturesService) {
    this.projectId = localStorage.getItem('currentProjectId');
    this.assetId = localStorage.getItem('currentAssetId');
    this.documentsData = [
      {
        name: 'Document1',
        description: 'document description',
        createdAt: '12-2-2021',
        imageUrl: './assets/images/kitten-dark.png',
      },
      {
        name: 'Document2',
        description: 'document description',
        createdAt: '12-1-2021',
        imageUrl: './assets/images/kitten-dark.png',
      },
      {
        name: 'Document2',
        description: 'document description',
        createdAt: '12-3-2021',
        imageUrl: './assets/images/kitten-dark.png',
      },
      {
        name: 'Document5',
        description: 'document description',
        createdAt: '12-10-2021',
        imageUrl: './assets/images/kitten-dark.png',
      },
      {
        name: 'Document7',
        description: 'document description',
        createdAt: '12-10-2021',
        imageUrl: './assets/images/kitten-dark.png',
      },
      {
        name: 'Document8',
        description: 'document description',
        createdAt: '12-10-2021',
        imageUrl: './assets/images/kitten-dark.png',
      },
      {
        name: 'Document6',
        description: 'document description',
        createdAt: '12-1-2020',
        imageUrl: './assets/images/kitten-dark.png',
      },
      {
        name: 'Document6',
        description: 'document description',
        createdAt: '12-1-2020',
        imageUrl: './assets/images/kitten-dark.png',
      },
      {
        name: 'Document6',
        description: 'document description',
        createdAt: '12-1-2020',
        imageUrl: './assets/images/kitten-dark.png',
      },
      {
        name: 'Document7',
        description: 'document description',
        createdAt: '11-1-2021',
        imageUrl: './assets/images/kitten-dark.png',
      },
    ];
  }
  convertToDate(dateString) {
    return typeof new Date(dateString);
  }
  ngOnInit(): void {
    this.getDocuments();
    this.sortTableByDate();
  }
  sortTableByDate() {
    this.documentsData.sort((val1, val2) => {
      return <any>new Date(val2.createdAt) - <any>new Date(val1.createdAt);
    });
  }
  getDocuments() {
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
