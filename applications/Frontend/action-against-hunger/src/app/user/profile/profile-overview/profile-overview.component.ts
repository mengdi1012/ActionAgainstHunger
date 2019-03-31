import {Component, OnInit} from '@angular/core';
import { User } from '../../../model/user.model';
import { Student } from '../../../model/student.model';
import { UsersService } from '../../../service/users.service';


@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.css']
})


export class ProfileOverviewComponent implements OnInit {
    isTeacher = false;
    user: User;
    students:Student[];
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
          this.isTeacher = this.user.usertype == "teacher";
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
