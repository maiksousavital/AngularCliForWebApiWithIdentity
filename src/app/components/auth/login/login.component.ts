import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ILoginRequest } from 'src/app/types/LoginRequest';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { NotificationService } from 'src/app/services/notification.service';
import { ILoginResponse } from 'src/app/types/LoginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private notification: NotificationService
  ) {}

  loginRequest: ILoginRequest = {
    Email: '',
    Password: '',
  };
name:string = ''
  login(loginRequest: ILoginRequest) {
    
    this.authService
      .login(loginRequest)
      .pipe(first())
      .subscribe({
        next: (res:ILoginResponse) => {            
          localStorage.setItem('token', res.Token);       
          this.router.navigateByUrl(res.ReturnUrl);
        },
        error: (error) => {
          // this.alertService.error(error);
          // this.loading = false;
          this.notification.showError(error.error, "Login Failed!")
        },
      });
  }

  
}
