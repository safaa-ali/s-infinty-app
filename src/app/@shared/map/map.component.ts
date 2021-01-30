import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { ProjectsService } from "app/@app/projects/projects.service";
import * as L from "leaflet";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/cube.svg";
import "leaflet/dist/images/hand.svg";
import "leaflet/dist/images/doc.svg";
import "leaflet/dist/images/img.svg";
import "leaflet/dist/images/video.svg";
import "leaflet/dist/images/search.svg";
import "leaflet/dist/images/x.svg";
import { icon, Layer, marker } from "leaflet";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent implements OnInit {
  @Input() projectId: number;
  @Output() mapAsset = new EventEmitter<string>();
  bodyPopup: any;
  optionsPopup: any;
  stationsLocations: [];
  mapTile = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
    maxZoom: 23,
    minZoom: 19,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  });
  map: L.Map;
  loadMap: boolean = false;
  markers: Layer[] = [];
  options = {
    layers: [this.mapTile],
    zoom: 16,
    center: L.latLng([51, 0.22]),
  };
  constructor(
    private router: Router,
    private _ProjectsService: ProjectsService
  ) {
    this.bodyPopup = `
    <div class="icon"><img src='doc.svg' id="doc"></div>
    <div class="icon"><img src='hand.svg' id="hand"></div>
    <div class="icon"><img src='cube.svg' id="3dmodel"></div>
    <div class="icon"><img src='x.svg' id="charts"></div>
    <div class="icon"><img src='img.svg' id="img"></div>
    <div class="icon"><img src='search.svg' id="search"></div>
    <div class="icon"><img src='video.svg' id="video"></div>
    `;
    this.optionsPopup = {
      maxWidth: "400",
      width: "200",
      closeButton: false,
      className: "popupCustom",
    };
    
  }
  ngOnInit() {
    this.getLocations();
  }
  locateStations(map: L.Map) {
     this.addMarker(51,0.22);
  }
  getLocations() {
    this._ProjectsService.getStations(this.projectId).subscribe((res) => {
      this.stationsLocations = res.data.items.filter(
        (item) => item.assetType === "stationary"
      );
      this.addMarkers();
      this.loadMap = true;
    });
  }

  addMarkers() {
    // console.log(this.stationsLocations.length);
    
    for (let i = 0; i < this.stationsLocations.length; i++) {
      console.log(this.stationsLocations[i]["latitude"]);
      this.addMarker(
        this.stationsLocations[i]["latitude"],
        this.stationsLocations[i]["longitude"]
      );
      // console.log(this.markers.length);
    }
  }
  addMarker(lat, long) {
    const newMarker = marker([lat, long], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon.png",
        shadowUrl: "marker-shadow.png",
      }),
    })
      .bindPopup(this.bodyPopup, this.optionsPopup)
      .on("popupopen", (e) => {
        document.querySelector("#doc").addEventListener("click", () => {
          this.mapAsset.emit("documents");
        });
        document.querySelector("#img").addEventListener("click", () => {
          e;
          this.mapAsset.emit("images");
        });
        document.querySelector("#video").addEventListener("click", () => {
          e;
          this.mapAsset.emit("videos");
        });
      });
    this.markers.push(newMarker);
  }
}
