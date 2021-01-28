import { Component, Input, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'ngx-map-content',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.scss'],
})
export class MapViewerComponent implements OnInit {
  @Input() projectId: number;
  constructor(private sidebarService: NbSidebarService) {}

  ngOnInit(): void {}
  toggleSidebar() {
    this.sidebarService.toggle(true, 'menu-sidebar');
  }
  toggleCompact() {
    this.sidebarService.toggle(true, 'right');

  }
}
