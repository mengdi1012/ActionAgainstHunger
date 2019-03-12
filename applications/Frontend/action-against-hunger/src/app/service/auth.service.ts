import { Comment } from "../model/comment.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({providedIn: "root"})
export class AuthService {
    private userID: String;
    private classroomID: String;
    private role: String;

    constructor(private http: HttpClient){}

    isAuthenticated(){
        return true;
    }

    getUserID(){
        this.userID = "Admin";
        return this.userID;
    }

    getClassroomID(){
        this.classroomID = "private";
        return this.classroomID;
    }

    isTeacher(){
        return true;
    }

    isStudent(){
        return false;
    }

    isGuest(){
        return false;
    }

    isAdmin(){
        return false;
    }

}