import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-profile-activity',
  templateUrl: './profile-activity.component.html',
  styleUrls: ['./profile-activity.component.css']
})
export class ProfileActivityComponent {

<<<<<<< HEAD
  constructor(private authService: AuthService, private router: Router) {
    console.log('Creating activity Component');
  }
  ngOnInit() {
  }
  goReset() {
    const url = 'update_pw';
    this.router.navigate([url]).then((e) => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }
=======
  constructor(private authService: AuthService){console.log("Creating Profile Activity Component")}
>>>>>>> parent of 38c6b6a... backend of the profile angular change password
}
