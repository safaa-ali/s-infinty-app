import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MapFeaturesService } from '../../map-features.service';
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
  videoItems = [
    { title: 'Rename' },
    { title: 'Share' },
    { title: 'Download' },
    { title: 'Delete' },
  ];
  constructor(
    private _mapFeature: MapFeaturesService,
    private datePipe: DatePipe,
  ) {
    this.projectId = localStorage.getItem('currentProjectId');
    this.assetId = localStorage.getItem('currentAssetId');
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
  sortTableByDate() {
    this.videos.sort((val1, val2) => {
      return val2.createdAt - val1.createdAt;
    });
  }
  getVideos() {
    this._mapFeature.getAssetFiles(this.assetId, 'video').subscribe((res) => {
      this.videos = res.data.items;
      // console.log(this.videos);
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
