import { Comment } from "../model/comment.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: "root"})
export class CommentsService {
    private postComments: Comment[] = [];
    private userPosts: Comment[] = [];

    constructor(private http: HttpClient){}

    getCommentsFromPost(postId: string){
        this.http.get<{comments: Comment []}>('http://localhost:3000/api/post/' + postId + "/comments")
        .subscribe((commentData) => {
            this.postComments = commentData.comments;
        });
    }

    getUserComments(userId: string){
        this.http.get<{comments: Comment []}>('http://localhost:3000/api/user/' + userId + "/comments")
        .subscribe((commentData) => {
            this.userPosts = commentData.comments;
        });
    }

    createComment(title: string, classroom: string, content: string){

    }
}