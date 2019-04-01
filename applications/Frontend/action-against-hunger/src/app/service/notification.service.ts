import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Notification } from "../model/notification.model";


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  

  constructor(private http: HttpClient) { }

    
  getNotification(user: string): Observable<Notification[]>{
    const url = environment.APIEndpoint + "/api/notification/" + user;
    return this.http.get<Notification[]>(url, {withCredentials: true});
  }
 
  createNotification(commentId: string, user: string): Observable<any> {
    const url = environment.APIEndpoint + "/api/notification/create/" + user + '/' + commentId;
    return this.http.post<Array<JSON>>(url, {withCredentials: true});
}

  updateNotification(notifId: string) {
    const url = environment.APIEndpoint + "/api/notification/update/" + notifId;
    return this.http.get<Notification[]>(url, {withCredentials: true});
}
}
