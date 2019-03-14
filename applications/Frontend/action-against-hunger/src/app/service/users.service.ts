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
        return this.http.get<User>(url, {withCredentials: true})
        .pipe(
            catchError(this.handleError('getUser', ""))
        );
    }

     /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
        
        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }
}