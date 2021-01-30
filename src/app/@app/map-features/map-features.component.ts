import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { map_menu } from './map-menu';

@Component({
  selector: 'ngx-map-features',
  templateUrl: './map-features-component.html',
  styleUrls: ['./map-features.component.scss'],
})
export class MapFeaturesComponent implements OnInit {
  menu: NbMenuItem[];
  constructor() {
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      window.location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
  }
  ngOnInit(): void {}
  mapMenu = map_menu;
}
