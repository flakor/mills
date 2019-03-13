import { ViewChild, Component, ElementRef } from '@angular/core';
import { AuthenticationService, UserDetails, TokenPayload } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  @ViewChild('btnClose') btnClose : ElementRef
  details: UserDetails;
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };


  constructor(private auth: AuthenticationService, private router: Router) {

  }



  ngOnInit() {
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }
  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.btnClose.nativeElement.click();
      this.router.navigateByUrl('/profile');

    }, (err) => {
      console.error(err);
    });
  }
}
