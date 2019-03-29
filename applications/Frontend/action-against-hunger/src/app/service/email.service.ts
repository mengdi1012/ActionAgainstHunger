import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';



@Injectable({providedIn: "root"})
export class EmailService {

    constructor(private http: HttpClient){}

    sendInivationEmail(email: string, usertype: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true
          };
        const credential = {email: email, usertype: usertype};
        return this.http.post<Array<JSON>>(environment.APIEndpoint + "/api/invite", credential, httpOptions);
    }    

}