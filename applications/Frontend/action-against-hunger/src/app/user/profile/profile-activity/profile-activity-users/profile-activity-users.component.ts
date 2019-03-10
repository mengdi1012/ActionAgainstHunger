import { Component, OnInit } from '@angular/core';
import { User } from '../../../../model/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-activity-users',
  templateUrl: './profile-activity-users.component.html',
  styleUrls: ['./profile-activity-users.component.css']
})
export class ProfileActivityUsersComponent {
  childUsers: User[] = [];
}
