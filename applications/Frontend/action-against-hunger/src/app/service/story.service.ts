import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Story } from "../model/story.model";


@Injectable({
  providedIn: 'root'
})
export class StoryService {
  

  constructor(private http: HttpClient) { }

    
  getStory(): Observable<Story[]>{
    const url = environment.APIEndpoint + "/api/story/";
    return this.http.get<Story[]>(url, {withCredentials: true});
  }
 
  createStory(content: string): Observable<any> {
    const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true
      };
    const credential = {content: content};
    return this.http.post<Array<JSON>>(environment.APIEndpoint + "/api/story", credential, httpOptions);
}

  updateLike(storyId: string):Observable<any> {
    const url = environment.APIEndpoint + "/api/story/like/" + storyId;
    return this.http.get<Array<JSON>>(url, {withCredentials: true});
}
}
