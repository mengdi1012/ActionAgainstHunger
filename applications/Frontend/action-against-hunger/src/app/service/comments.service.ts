import { Comment } from "../model/comment.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({providedIn: "root"})
export class CommentsService {
    
    constructor(private http: HttpClient){}

    
    getComments(postId: string): Observable<Comment[]>{
        const url = environment.APIEndpoint + "/api/comment/post/" + postId;
        return this.http.get<Comment[]>(url, {withCredentials: true});
    }

    getComment(commentId: string): Observable<Comment>{
        const url = environment.APIEndpoint + "/api/comment/comment/" + commentId;
        return this.http.get<Comment>(url, {withCredentials: true});
    }


    createComment(postId: string, content: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true
          };
        const credential = {postId: postId, content: content};
        return this.http.post<Array<JSON>>(environment.APIEndpoint + "/api/comment/" + postId, credential, httpOptions);
    }
}