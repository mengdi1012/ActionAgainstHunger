import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';



@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(private http: HttpClient){}

    login(username: string, password: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true
          };
        const credential = {username: username, password: password};
        return this.http.post<Array<JSON>>(environment.APIEndpoint + "/api/signin", credential, httpOptions)
        .pipe(
            catchError(this.handleError('getHeroes', []))
        );
    }

    resetPW(password1: string, password2: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true
        };
        const credential = {password1: password1, password2: password2};
        return this.http.post<Array<JSON>>(environment.APIEndpoint + "/api/update_pw", credential, httpOptions)
            .pipe(
                catchError(this.handleError('getHeroes', []))
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

    getUserID() {
        return 1;
    }

    isAuthenticated() {
        return true;
    }
}