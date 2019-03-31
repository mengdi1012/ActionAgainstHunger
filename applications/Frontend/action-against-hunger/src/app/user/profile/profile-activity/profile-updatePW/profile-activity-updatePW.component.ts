import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-activity-update',
  templateUrl: './profile-activity-updatePW.component.html',
  styleUrls: ['./profile-activity-updatePW.component.css']
})


export class ProfileActivityUpdateComponent implements OnInit {
  password1 = '';
  password2 = '';

  constructor(private authService: AuthService, private router: Router) {
    console.log('Creating Login Component');
  }

  ngOnInit() {
  }

  reset(): void {
    console.log('try login', this.password1, this.password2);
    // @ts-ignore
    this.authService.resetPW(this.password1, this.password2)
        .subscribe((res: string) => {
          console.log('get authenticate result:', res)
          if (res['result'] === 'success') {
            window.alert('success');
          } else {
            window.alert('change password fail');
          }
        });
  }
}

