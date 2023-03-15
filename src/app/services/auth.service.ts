import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BASE_URL } from '../constants/constants';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../types/User';
import { ILoginRequest } from '../types/LoginRequest';
import { IForgotPassword } from '../types/ForgotPassword';
import { ILoginResponse } from '../types/LoginResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn:boolean = false;
  
  constructor(private http: HttpClient) {}

  // isAuthenticated():boolean {
  //   return this.isLoggedIn;
  // }

  public register(user: IUser): Observable<any> {
    return this.http.post<any>(BASE_URL + 'Account/Register', user);
  }

  public login(loginRequest: ILoginRequest): Observable<any> {
    return this.http.post<any>(BASE_URL + 'Account/Login', loginRequest);
  }

  public forgotPassword(forgotPassword: IForgotPassword): Observable<any> {
    return this.http.post<ILoginResponse>(
      BASE_URL + 'Account/ForgotPassword',
      forgotPassword
    );
  }

  public resetPassword(resetPassword: IForgotPassword): Observable<any> {
    return this.http.post<any>(
      BASE_URL + 'Account/ResetPassword',
      resetPassword
    );
  }
}
