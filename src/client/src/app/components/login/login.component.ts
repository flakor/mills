import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router, private toastr: ToastrService) {}

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.toastr.success('Login successful.');
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
      this.toastr.error(err);
    });
  }
}
