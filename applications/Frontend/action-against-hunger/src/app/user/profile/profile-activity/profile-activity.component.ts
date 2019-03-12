import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-profile-activity',
  templateUrl: './profile-activity.component.html',
  styleUrls: ['./profile-activity.component.css']
})
export class ProfileActivityComponent {

  constructor(private authService: AuthService){console.log("Creating Profile Activity Component")}
}
