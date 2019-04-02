import { Component, OnInit } from '@angular/core';
import { User } from '../../../../model/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-activity-all-users',
  templateUrl: './profile-activity-all-users.component.html',
  styleUrls: ['./profile-activity-all-users.component.css']
})
export class ProfileActivityAllUsersComponent {
  users: User[] = [];


}
