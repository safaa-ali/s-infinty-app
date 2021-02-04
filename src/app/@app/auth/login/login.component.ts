// import { HttpConnectionService } from './../../../@core/utils/http-connection.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from 'app/@core/utils/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userdata;
  loginForm: FormGroup;

  constructor (private fb: FormBuilder, private router: Router, private http: HttpClient,
    private _authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      username: new FormControl('admin', [Validators.required, Validators.pattern('[a-z]{3,12}')]),
      password: new FormControl(123456, [Validators.required, Validators.pattern('[1-9]{6,12}')]),

    });
  }

  ngOnInit(): void {
  }

  showPassword = true;

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  onSubmit(form) {

    const username = form.value.username;
    const password = form.value.password;



    this._authService.login(username, password).subscribe(res => {
      this.router.navigate(['/projects']);
    });

  }
}
