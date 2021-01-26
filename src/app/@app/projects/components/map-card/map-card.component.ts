import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.scss'],
})
export class MapCardComponent implements OnInit {
  toggle: boolean = false;
  @Input() pname: string;
  @Input() description: string;
  @Input() imageUrl: string;
  @Input() createdAt: string;
  items = [
    { title: 'IoT Monitoring' },
    { title: 'Data Analytics' },
    { title: 'Models' },
    { title: 'Point Cloud' },
    { title: 'Project Management' },
  ];
  constructor() {}

  ngOnInit() {}
  toggleMenu() {
    this.toggle = !this.toggle;
  }
}
