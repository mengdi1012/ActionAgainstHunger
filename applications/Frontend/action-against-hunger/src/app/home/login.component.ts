import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('usernameInput') usernameInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(){
    if(this.authService.isAuthenticated()){
      this.router.navigate(['/']);
    }
  }

  createPost() {
    const username = this.usernameInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;
  }
}
