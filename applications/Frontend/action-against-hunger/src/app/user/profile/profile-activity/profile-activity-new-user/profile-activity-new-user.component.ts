import { Component, OnInit } from '@angular/core';
import { User } from '../../../../model/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-activity-new-user',
  templateUrl: './profile-activity-new-user.component.html',
  styleUrls: ['./profile-activity-new-user.component.css']
})
export class ProfileActivityNewUserComponent {
  childUsers: User[] = [];

  createUser(){
    console.log('Creating New User');
  }
}
