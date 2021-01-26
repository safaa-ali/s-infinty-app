import { LoginGuardService } from './../../@core/utils/service/login-guard.service';
import { ForgotPasswordModalComponent } from './forgot-password-modal/forgot-password-modal.component';
LoginGuardService
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AuthComponent,
    // canActivateChild:[LoginGuardService],
    children: [
      {
        path: 'login', component: LoginComponent,

      },
      {
        path: 'forget', component: ForgotPasswordModalComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
