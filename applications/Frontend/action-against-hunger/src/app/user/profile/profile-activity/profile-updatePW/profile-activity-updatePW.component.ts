import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-activity-update',
  templateUrl: './profile-activity-updatePW.component.html',
  styleUrls: ['./profile-activity-updatePW.component.css']
})


export class ProfileActivityUpdateComponent implements OnInit {
  password = '';

  constructor(private authService: AuthService, private router: Router) {
    console.log('Creating Login Component');
  }

  ngOnInit() {
  }

  reset(): void {
    console.log('try login', this.password);
    // @ts-ignore
    this.authService.login(this.password)
        .subscribe((res: string) => {
          console.log('get authenticate result:', res)
          if (res['result'] === 'success') {
            this.resetPW();
          } else {
            window.alert('change password fail');
          }
        });
  }

  resetPW() {
    const url = 'profile';
    this.router.navigate([url]).then((e) => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }
}

