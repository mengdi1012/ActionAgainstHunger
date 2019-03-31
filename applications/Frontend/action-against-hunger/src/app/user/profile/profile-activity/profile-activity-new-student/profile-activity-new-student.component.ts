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
  private password="";
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
      console.log(this.newStudents, this.password);
      this.authService.createStudents(this.newStudents, this.password)
      .subscribe((res: string) => {
        console.log("get authenticate result:", res)
        if(res["result"] == "success"){
          window.alert("success");
          window.location.reload();
        }else{
          window.alert("something wrong, please try again");
        }
      });
  }
}
