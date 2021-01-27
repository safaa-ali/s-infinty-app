import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from 'app/@app/projects/projects.service';
import * as L from 'leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/cube.svg';
import 'leaflet/dist/images/hand.svg';
import 'leaflet/dist/images/doc.svg';
import 'leaflet/dist/images/img.svg';
import 'leaflet/dist/images/video.svg';
import 'leaflet/dist/images/search.svg';
import 'leaflet/dist/images/x.svg';
import { icon, Layer, marker } from 'leaflet';

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
    minZoom: 19,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  });
  map: L.Map;
  loadMap: boolean = false;
  markers: Layer[] = [];
  options = {
    layers: [this.mapTile],
    zoom: 16,
    center: L.latLng([51, 0.22]),
  };  constructor(private _ProjectsService: ProjectsService) {
    this.bodyPopup = `
    <div class="icon"><img src='doc.svg'></div>
    <div class="icon"><img src='hand.svg'></div>
    <div class="icon"><img src='doc.svg'></div>
    <div class="icon"><img src='x.svg'></div>
    <div class="icon"><img src='img.svg'></div>
    <div class="icon"><img src='search.svg'></div>
    <div class="icon"><img src='video.svg'></div>
    `;
    this.optionsPopup = {
      maxWidth: '400',
      width: '200',
      closeButton: false,
      className: 'popupCustom',
    };
  }
  ngOnInit() {
    this.getLocations();
  }
  locateStations(map: L.Map) {
    this.addMarker(51, 0.22);
    this.addMarkers();
  }
  getLocations() {
    this._ProjectsService.getStations(this.projectId).subscribe((res) => {
      this.stationsLocations = res.data.items.filter(
        (item) => item.assetType === 'stationary',
      );
      this.loadMap = true;
    });
  }

  addMarkers() {
    for (let i = 0; i < this.stationsLocations.length; i++) {
      this.addMarker(this.stationsLocations[i]['latitude'], this.stationsLocations[i]['longitude']);
      // console.log(this.markers.length);
    }
  }
  addMarker(lat, long) {
    const newMarker = marker([lat, long], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'marker-icon.png',
        shadowUrl: 'marker-shadow.png',
      }),
    }).bindPopup(this.bodyPopup, this.optionsPopup);
    this.markers.push(newMarker);
  }
}
