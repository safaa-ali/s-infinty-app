import { AuthService } from 'app/@core/utils/auth.service';
import { Component, Inject, OnInit } from '@angular/core';
import { NB_WINDOW, NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'ngx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

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
