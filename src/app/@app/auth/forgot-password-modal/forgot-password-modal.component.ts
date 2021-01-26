import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-forgot-password-modal',
  templateUrl: './forgot-password-modal.component.html',
  styleUrls: ['./forgot-password-modal.component.scss'],
})
export class ForgotPasswordModalComponent implements OnInit {

  @Output() requestConfirmed = new EventEmitter<any>();

  forgotPasswordForm: FormGroup;
  loading = false;

  constructor(
    protected ref: NbDialogRef<ForgotPasswordModalComponent>,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
  }

  requestAction() {
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    this.loading = true;
    const data = {
      email: this.forgotPasswordForm.get('email').value,
    };
    this.requestConfirmed.emit(data);
    this.loading = true;
  }

  backToSignup() {
    this.router.navigate(['/auth/register']);
    this.close();
  }

  close() {
    this.ref.close();
  }

}
