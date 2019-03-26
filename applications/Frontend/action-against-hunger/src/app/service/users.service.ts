import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { User } from "../model/user.model";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';



@Injectable({providedIn: "root"})
export class UsersService {
    private user: User;
    constructor(private http: HttpClient){}
    getUserInfo(): Observable<any> {
        const url = environment.APIEndpoint + "/api/user";
        return this.http.get<User>(url, {withCredentials: true});
    }
}