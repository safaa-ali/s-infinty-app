import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
@Component({
  selector: 'ngx-map-features',
  templateUrl: './map-features-component.html',
  styleUrls: ['./map-features.component.scss'],
})
export class MapFeaturesComponent implements OnInit {
  menu: NbMenuItem[];
  constructor() {
    this.menu = [
      {
        title: 'Documents',
        icon: 'folder',
        link: 'documents',
      },
      {
        title: 'Image Gallery',
        icon: 'person',
      },
      {
        title: 'Video Gallery',
        icon: 'person',
      },
      {
        title: 'Models',
        icon: 'person',
      },
      {
        title: 'Point Cloud',
        icon: 'person',
      },
      {
        title: 'Sensors Analysis',
        icon: 'person',
      },
      {
        title: 'Poi Managment',
        icon: 'person',
      },
    ];
  }
  ngOnInit(): void {}
}
