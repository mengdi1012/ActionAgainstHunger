import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-activity',
  templateUrl: './profile-activity.component.html',
  styleUrls: ['./profile-activity.component.css']
})
export class ProfileActivityComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    console.log('Creating activity Component');
  }
  ngOnInit() {

  }
  goReset() {
    console.log("go to reset")
    const url = '/profile/update_pw';
    console.log(url)
    this.router.navigate([url]).then((e) => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }
}