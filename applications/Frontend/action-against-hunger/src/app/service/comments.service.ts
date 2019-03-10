import { Comment } from "../model/comment.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({providedIn: "root"})
export class CommentsService {
    private postComments: Comment[] = [];
    private userPosts: Comment[] = [];

    private commentsUpdates = new Subject<Comment[]>();

    constructor(private http: HttpClient){}

    getCommentsFromPost(postId: string){
        this.http.get<Array<JSON>>('http://localhost:3000/api/post/' + postId + "/comments")
        .subscribe((commentData) => {
            console.log(commentData);
            this.postComments = [];
            commentData.forEach(eachComment => {
                this.postComments.push(new Comment(eachComment["content"], eachComment["content"], eachComment["content"]));
            });
            this.commentsUpdates.next([...this.postComments]);
        });
    }

    getCommentUpdateListener() {
        return this.commentsUpdates.asObservable();
    }

    getUserComments(userId: string){
        this.http.get<Array<JSON>>('http://localhost:3000/api/user/' + userId + "/comments")
        .subscribe((commentData) => {
            console.log(commentData);
            this.postComments = [];
            commentData.forEach(eachComment => {
                this.postComments.push(new Comment(eachComment["content"], eachComment["content"], eachComment["content"]));
            });
            this.commentsUpdates.next([...this.postComments]);
        });
    }

    createComment(title: string, post: string, content: string){
        const newComment: Comment = {username: content, content: content, post: post};
        this.http.post<Array<JSON>>("http://localhost:3000/api/post/"+ post + "/comments", newComment)
          .subscribe(responseData => {
            console.log(responseData);
            this.postComments.push(newComment);
            this.commentsUpdates.next([...this.postComments]);
          })
    }
}