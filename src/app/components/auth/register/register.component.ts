import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/types/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  user:IUser = {
    FirstName:'',
    LastName: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  }
 

  register(user: IUser) {
    this.authService.register(user).subscribe();
  }
}
