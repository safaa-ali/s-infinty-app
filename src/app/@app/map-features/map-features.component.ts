import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { map_menu } from './map-menu';

@Component({
  selector: 'ngx-map-features',
  templateUrl: './map-features-component.html',
  styleUrls: ['./map-features.component.scss'],
})
export class MapFeaturesComponent implements OnInit {
  menu: NbMenuItem[];
  constructor(private activateroute: ActivatedRoute) {
    // if (!localStorage.getItem('foo')) {
    //   localStorage.setItem('foo', 'no reload');
    //   window.location.reload();
    // } else {
    //   localStorage.removeItem('foo');
    // }
  }
  ngOnInit(): void {
    this.activateroute.params.subscribe((params) => {
      localStorage.setItem('currentProjectId', params['projectId']);
      localStorage.setItem('currentAssetId', params['assetId']);
      // console.log(params['assetId']);
    });
  }
  mapMenu = map_menu;
}
