import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { IForgotPassword } from 'src/app/types/ForgotPassword';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IResetPassword } from 'src/app/types/ResetPassword';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: any;

  constructor(
    private authService: AuthService,
    private notification: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      clientUrl: new FormControl(window.location.href.replace(this.router.url, '/ResetPassword'), [Validators.required]),
    });
  }

  forgotPassword(forgotPassword: IForgotPassword) {
    this.authService.forgotPassword(forgotPassword).subscribe({
      next: (res: any) => {
        this.notification.showSuccess(res.message, 'Forgot Password');
        console.log(res);
      },
      error: (error: HttpErrorResponse) => {
        this.notification.showInfo(error.message, 'Forgot Password');
      },
    });
  }
}
