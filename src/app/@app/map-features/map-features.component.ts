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
        icon:  { icon: 'doc', pack: 'svg' },
        link: 'documents',
      },
      {
        title: 'Image Gallery',
        icon:  { icon: 'img', pack: 'svg' },
        link: 'images',
      },
      {
        title: 'Video Gallery',
        icon:  { icon: 'video', pack: 'svg' },
      },
      {
        title: 'Models',
        icon:  { icon: 'cube', pack: 'svg' },
      },
      {
        title: 'Point Cloud',
        icon:  { icon: 'forge', pack: 'svg' },
      },
      {
        title: 'Sensors Analysis',
        icon:  { icon: 'search', pack: 'svg' },
      },
      {
        title: 'Poi Managment',
        icon:  { icon: 'hand', pack: 'svg' },
      },
    ];
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      window.location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
  }
  ngOnInit(): void {
  }
}
