import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { IResetPassword } from 'src/app/types/ResetPassword';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: any;
  private token: string = this.route.snapshot.queryParams['token'];
  private email: string = this.route.snapshot.queryParams['email'];

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.resetPasswordForm = new FormGroup({
      // email: new FormControl('', [Validators.required]),
      // token: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  resetPassword(resetPassword: IResetPassword) {
    this.authService.resetPassword(resetPassword).subscribe({
      next: (res: any) => {},
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }
}
