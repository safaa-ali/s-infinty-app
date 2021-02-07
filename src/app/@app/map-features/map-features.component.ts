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
  Menu: NbMenuItem[];
  constructor(
    private activateroute: ActivatedRoute,
  ) {
    this.Menu = map_menu;
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      window.location.reload();
    } else {
      localStorage.removeItem('foo');
    }
    this.activateroute.params.subscribe((params) => {
      localStorage.setItem('currentProjectId', params['projectId']);
      localStorage.setItem('currentAssetId', params['assetId']);
    });
  }
  ngOnInit(): void {}
}
