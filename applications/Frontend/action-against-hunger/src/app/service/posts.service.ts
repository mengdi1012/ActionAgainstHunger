import { Post } from "../model/post.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, Subject } from 'rxjs';

import { environment } from '../../environments/environment';



@Injectable({providedIn: "root"})
export class PostsService {

  constructor(private http: HttpClient){}

  private postsUpdated = new Subject<Post[]>();

    getPublicPosts(): Observable<Post[]> {
        const url = environment.APIEndpoint + "/api/post";
        return this.http.get<Post[]>(url, {withCredentials: true});
    }

    getPostsBySchool(school: string): Observable<Post[]>{
        const url = environment.APIEndpoint + "/api/post/school/" + school;
        return this.http.get<Post[]>(url, {withCredentials: true});
    }

    getPostsByUser(user: string): Observable<Post[]>{
        const url = environment.APIEndpoint + "/api/post/user/" + user;
        return this.http.get<Post[]>(url, {withCredentials: true});
    }

    getPostDetail(postId: string): Observable<Post>{
        const url = environment.APIEndpoint + "/api/post/" + postId;
        return this.http.get<Post>(url, {withCredentials: true});
    }
    
    createPost(title: string, content: string, type: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true
          };
        const credential = {title: title, content: content, type:type};
        return this.http.post<Array<JSON>>(environment.APIEndpoint + "/api/post", credential, httpOptions);
    }
    
}