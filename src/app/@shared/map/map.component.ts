import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ProjectsService } from 'app/@app/projects/projects.service';
import * as L from 'leaflet';
import { icon, Layer, marker } from 'leaflet';
@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() projectId: number;
  @Output() mapAsset = new EventEmitter<any>();
  bodyPopup: any;
  optionsPopup: any;
  stationsLocations: [];
  mapTile = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 23,
    minZoom: 12,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  });
  map: L.Map;
  Layers: Layer[] = [this.mapTile];
  options = {
    layers: this.Layers,
    zoom: 12,
    center: L.latLng([47.6183869, 12.9821816]),
  };
  loadMap: boolean = false;
  constructor(private _ProjectsService: ProjectsService) {
    this.bodyPopup = `
    <div class="icon"><img src='./assets/images/doc.svg' id="doc"></div>
    <div class="icon"><img src='./assets/images/hand.svg' id="hand"></div>
    <div class="icon"><img src='./assets/images/cube.svg' id="3dmodel"></div>
    <div class="icon"><img src='./assets/images/x.svg' id="charts"></div>
    <div class="icon"><img src='./assets/images/image.svg' id="img"></div>
    <div class="icon"><img src='./assets/images/search.svg' id="search"></div>
    <div class="icon"><img src='./assets/images/video.svg' id="video"></div>
    `;
    this.optionsPopup = {
      maxWidth: '400',
      width: '200',
      closeButton: false,
      className: 'popupCustom',
    };
  }
  ngOnChanges(changes) {
    changes;
    this.loadMap = false;
    this.Layers = [this.mapTile];
    this.options = {
      layers: this.Layers,
      zoom: 12,
      center: L.latLng([47.6183869, 12.9821816])};
    this.getLocations();
}

  ngOnInit() {
    this.loadMap = false;
    this.getLocations();
  }
  getLocations() {
    this._ProjectsService.getStations(this.projectId).subscribe((res) => {
      this.stationsLocations = res.data.items.filter(
        (item) => item.assetType === 'stationary',
      );
      // console.log(this.stationsLocations);
      this.addMarkers();
      this.loadMap = true;
    });
  }

  addMarkers() {
    for (let i = 0; i < this.stationsLocations.length; i++) {
      this.Layers.push(
        this.addMarker(
          this.stationsLocations[i]['longitude'],
          this.stationsLocations[i]['latitude'],
          this.stationsLocations[i]['id'],
        ),
      );
    }
    this.options.layers = this.Layers;
  }
  addMarker(lat, long, id) {
    const newmarker = marker([lat, long], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: './assets/images/marker-icon.png',
        iconRetinaUrl: './assets/images/marker-icon.png',
        shadowUrl: './assets/images/marker-shadow.png',
      }),
    })
      .bindPopup(this.bodyPopup, this.optionsPopup)
      .on('popupopen', (e) => {
        document.querySelector('#doc').addEventListener('click', () => {
          this.mapAsset.emit({'type': 'documents', 'id': id});
        });
        document.querySelector('#img').addEventListener('click', () => {
          e;
          this.mapAsset.emit({'type': 'images', 'id': id});
        });
        document.querySelector('#video').addEventListener('click', () => {
          e;
          this.mapAsset.emit({'type': 'videos', 'id': id});
        });
      });
    return newmarker;
  }
}
