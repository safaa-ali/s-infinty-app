import { SharedModule } from 'app/@shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordModalComponent } from './forgot-password-modal/forgot-password-modal.component';
import { NbMenuModule, NbCardModule, NbButtonModule, NbIconModule, NbCheckboxModule, NbAlertModule, NbInputModule, NbFormFieldModule, NbLayoutModule } from '@nebular/theme';
import { ThemeModule } from './../../@theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AuthComponent,
    ForgotPasswordModalComponent,
    LoginComponent,
  ],
  imports: [

    CommonModule,
    AuthRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule,
   NbIconModule,
   NbCheckboxModule,
   NbAlertModule,
   NbInputModule,
   NbFormFieldModule,
   SharedModule,
   NbLayoutModule,

  ],
})
export class AuthModule { }
