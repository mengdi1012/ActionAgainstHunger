import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { User } from "../model/user.model";
import { Student } from "../model/student.model"
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';



@Injectable({providedIn: "root"})
export class UsersService {
    private user: User;
    constructor(private http: HttpClient){}
    getUserInfo(): Observable<User> {
        const url = environment.APIEndpoint + "/api/user";
        return this.http.get<User>(url, {withCredentials: true});
    }

    getStudents(): Observable<Student[]> {
        const url = environment.APIEndpoint + "/api/get_students";
        return this.http.get<Student[]>(url, {withCredentials: true});
    }
}