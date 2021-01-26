import { AuthService } from './../../../@core/utils/service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  userdata;
  loginForm: FormGroup;

  constructor (private fb: FormBuilder, private router: Router, private http: HttpClient, private auth: AuthService) {
    this.loginForm = this.fb.group({
      username: new FormControl('admin', [Validators.required, Validators.pattern('[a-z]{3,12}')]),
      password: new FormControl(123456, [Validators.required, Validators.pattern('[1-9]{6,12}')]),

    });
  }

  ngOnInit(): void {
  }
  // checked = false;

  // toggle(checked: boolean) {
  //   this.checked = checked;
  // }
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

    this.auth.getToken('login', form.value).subscribe(res => {
      console.log(res);
      localStorage.setItem('tokenLogin', res['data']['token']);
      localStorage.setItem('userLogin', res['data']);

      this.router.navigate(['/projects']);

    });
  }

}
