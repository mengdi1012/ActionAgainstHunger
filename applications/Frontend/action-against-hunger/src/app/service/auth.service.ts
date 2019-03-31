import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';



@Injectable({providedIn: "root"})
export class AuthService {

    constructor(private http: HttpClient){}

    login(username: string, password: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true
          };
        const credential = {username: username, password: password};
        return this.http.post<Array<JSON>>(environment.APIEndpoint + "/api/signin", credential, httpOptions);
    }

    signup(email: string, password: string, username: string, school: string, profession: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true
          };
        const credential = {email: email,
            password: password,
            username: username,
            school: school,
            profession: profession
        };
        return this.http.post<Array<JSON>>(environment.APIEndpoint + "/api/signup", credential, httpOptions);
    }

    createStudents(newstudents: Array<any>, password: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true
          };
        const credential = {studentlist: newstudents , password: password};
        return this.http.post<Array<JSON>>(environment.APIEndpoint + "/api/createstudent", credential, httpOptions);
    }

    resetPW(password1: string, password2: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true
        };
        const credential = {password1: password1, password2: password2};
        return this.http.post<Array<JSON>>(environment.APIEndpoint + "/api/update_pw", credential, httpOptions);
    }


    getUserID(){
        return 1;
    }

    logout(){
        return this.http.get(environment.APIEndpoint + "/api/logout", {withCredentials: true}); 
    }
}