import { Component } from '@angular/core';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.css']
})
export class ProfileOverviewComponent {
  user: User = new User("Joshua", "Westview", "Teacher");
  students: User[] = [new User("Student1", "Westview", "Student"),
  new User("Student2", "Westview", "Student")];
}
