import { Component, OnInit } from '@angular/core';
import { NbIconLibraries, NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
@Component({
  selector: 'ngx-s-infinty-layout',
  templateUrl: './s-infinty-layout.component.html',
  styleUrls: ['./s-infinty-layout.component.scss'],
})
export class SInfintyLayoutComponent implements OnInit {

  constructor(    private sidebarService: NbSidebarService,
    ) { }

  ngOnInit(): void {

  }
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    // this.layoutService.changeLayoutSize();
    return false;
  }
}
