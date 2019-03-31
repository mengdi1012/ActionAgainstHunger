import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  

  constructor(private http: HttpClient) { }

    
  getNotification(user: string): Observable<Comment[]>{
    const url = environment.APIEndpoint + "/api/notification" + user;
    return this.http.get<Comment[]>(url, {withCredentials: true});
}
}
