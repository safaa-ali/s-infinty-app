import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NB_WINDOW } from '@nebular/theme';

import { map, takeUntil } from 'rxjs/operators';
import { AuthService } from 'app/@core/utils/auth.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor (
    private nbMenuService: NbMenuService,
    @Inject(NB_WINDOW) private window,
    private _authService: AuthService,


  ) {
  }
  ngOnInit() {
    this.nbMenuService
      .onItemClick()
      .pipe(
        map(({ item: { title } }) => title),
      ).subscribe((title) => {
        if (title === 'Logout') {
          this._authService.logout();
        }
      });
  }

  items = [
    { title: 'Logout', icon: 'log-out', pack: 'eva' },
  ];

}
