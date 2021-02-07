import { MENU_ITEMS } from './../../pages/pages-menu';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/@core/utils/auth.service';
@Component({
  selector: 'ngx-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    if (authService.currentUserValue) this.router.navigate(['projects']);
  }

  ngOnInit(): void { }
  menu = MENU_ITEMS;
}
