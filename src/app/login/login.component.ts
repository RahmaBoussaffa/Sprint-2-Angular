import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  user = new User();

  erreur = 0;
  
  onLoggedIn(){
    this.authService.login(this.user).subscribe((data) => {
      console.log(data);
      let jwt = data.headers.get('Authorization');
      this.authService.saveToken(jwt);
      this.router.navigate(['/']);
    }, (err) => { this.erreur = 1});
  }
}
