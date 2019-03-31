import { Component, OnInit } from '@angular/core';
import { User } from '../../../../model/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../service/auth.service';


@Component({
  selector: 'app-profile-activity-new-student',
  templateUrl: './profile-activity-new-student.component.html',
  styleUrls: ['./profile-activity-new-student.component.css']
})
export class ProfileActivityNewStudentComponent {
  private password1="";
  private password2="";
  private newStudents: Array<any> = [];
  private newAttribute: any = {};

  constructor(private authService: AuthService) {
    console.log('Creating profile activity new student component');
  }


  ngOnInit() {
  }

  addFieldValue() {
    this.newStudents.push(this.newAttribute)
    this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.newStudents.splice(index, 1);
  }

  createNewStudent() {
      if (this.password1 !== this.password2) {
            alert('Passwords do not match!');
      } else {
            console.log(this.newStudents, this.password1);
            this.authService.createStudents(this.newStudents, this.password1)
            .subscribe((res: string) => {
            console.log("get authenticate result:", res);
            if (res["result"] === "success"){
              window.alert('success');
              window.location.reload();
            } else {
              window.alert('something wrong, please try again');
            }
        }); }
  }
}

