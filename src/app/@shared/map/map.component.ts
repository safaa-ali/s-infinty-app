import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from 'app/@app/projects/projects.service';
import * as L from 'leaflet';

@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() projectId: number;
  bodyPopup: any;
  optionsPopup: any;
  stationsLocations: [];
  mapTile = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 23,
    minZoom: 16,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  });
  map: L.Map;
  options = {
    layers: [this.mapTile],
    zoom: 19,
    center: L.latLng([51.60706364167399, 0.22418975830078128]),
  };
  constructor(private _ProjectsService: ProjectsService) {
    this.bodyPopup = ` <div class="icon"><img src='assets/images/in'></div>
                <div class="icon">2</div>
                <div class="icon">3</div>
                <div class="icon">4</div>
                <div class="icon">5</div>
                <div class="icon">6</div>  `;
    this.optionsPopup = {
      maxWidth: '400',
      width: '200',
      closeButton: false,
      className: 'popupCustom',
    };
  }
  createMarker(lat, long) {
    L.marker(L.latLng(lat, long))
      .bindPopup(this.bodyPopup, this.optionsPopup)
      .addTo(this.map);
  }
  ngOnInit() {
    this.getLocations();
  }
  locateStations(map: L.Map) {
    L.marker([51, 30])
      .addTo(this.map)
      .bindPopup(this.bodyPopup, this.optionsPopup);
    // console.log('done');
  }
  getLocations() {
    this._ProjectsService.getStations(this.projectId).subscribe((res) => {
      this.stationsLocations = res.data.items.filter(
        (item) => item.assetType === 'stationary',
      );
      // console.log(this.stationsLocations);
    });
  }
}
