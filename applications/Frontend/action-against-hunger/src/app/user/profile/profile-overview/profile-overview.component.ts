import { Component } from '@angular/core';
import { User } from '../../../model/user.model';
import { Student } from '../../../model/student.model';
import { UsersService } from '../../../service/users.service';


@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.css']
})
export class ProfileOverviewComponent {
  // user: User = new User("Joshua", "Westview", "Teacher");
  // students: User[] = [new User("Student1", "Westview", "Student"),
  // new User("Student2", "Westview", "Student")];
  user: User;
  students: Student[];
  constructor(private userService: UsersService){ 

  }
  ngOnInit() {
    this.getUser();
    this.getStudents();
  }

  getUser(): void {
    console.log("try get user info");
    this.userService.getUserInfo()
      .subscribe(user => {
        this.user = user
        console.log("get response:", user)
        if(user["username"] != ""){
          console.log("get user detail, ", user)
        }else{
          window.alert("not valid session");
        }          
      });
  }

  getStudents(): void {
    console.log("try to load student list");
    this.userService.getStudents()
      .subscribe(students => this.students = students)
  };
}
