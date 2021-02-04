import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { LayoutService } from 'app/@core/utils/layout.service';
@Component({
  selector: 'ngx-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {

  constructor (
    private sidebarService: NbSidebarService,
    private layoutService: LayoutService,
    private router: Router,

  ) { }

  ngOnInit(): void {

  }
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }
  toggleCompact() {
    this.sidebarService.toggle(true, 'right');

  }
  logoRoute() {
    this.router.navigate(['/projects']);
  }
}
