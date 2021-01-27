import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  bodyPopup: any;
  optionsPopup: any;
  private map;
  constructor() {
    this.bodyPopup = `
    <div class="icon"><img src="imagesconn/3.svg"></div>
    <div class="icon"> <img src="images/3.svg"></div>
    <div class="icon"> <img src="images/3.svg"></div>
    <div class="icon"> <img src="images/1.svg"></div>
    <div class="icon"> <img src="images/1.svg"></div>
    <div class="icon"> <img src="images/1.svg"></div>
                `;
    this.optionsPopup = {
      maxWidth: '400',
      width: '200',
      closeButton: false,
      className: 'popupCustom',
    };
  }
  ngOnInit() {
    this.initMap(51.60706364167399, 0.22418975830078128);
    this.addMarker();
  }
  initMap(latitude, longitude) {
    this.map = L.map('map').setView([latitude, longitude], 18);
    const tiles = L.tileLayer(
      'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
      {
        maxZoom: 23,
        minZoom: 16,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      },
    ).addTo(this.map);
    L.marker([latitude, longitude])
      .addTo(this.map)
      .bindPopup(this.bodyPopup, this.optionsPopup);
    // L.Icon.Default.mergeOptions({
    //   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    //   iconUrl: require("leaflet/dist/images/marker-icon.png"),
    //   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    // });
    tiles.addTo(this.map);
  }
  addMarker() {
    this.map.on('click', (e) => {
      L.marker([e.latlng.lat, e.latlng.lng])
        .addTo(this.map)
        .bindPopup(this.bodyPopup, this.optionsPopup);
    });
  }
}
