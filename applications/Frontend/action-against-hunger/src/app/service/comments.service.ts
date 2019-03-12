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
            if(commentData != null){
                commentData.forEach(eachComment => {
                    console.log("New Comment: " + eachComment);
                    var eachCommentData = eachComment["data"]
                    this.postComments.push(new Comment(
                        eachComment["commentID"], eachCommentData["postID"], eachCommentData["userID"],
                        eachCommentData["commentContent"], eachCommentData["dateCreated"], eachCommentData["postTitle"]));
                });
            }
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
            this.userPosts = [];
            if(commentData != null){
                commentData.forEach(eachComment => {
                    console.log("New Comment: " + eachComment);
                    var eachCommentData = eachComment["data"]
                    this.userPosts.push(new Comment(
                        eachComment["commentID"], eachCommentData["postID"], eachCommentData["userID"],
                        eachCommentData["commentContent"], eachCommentData["dateCreated"], eachCommentData["postTitle"]));
                });
            }
            this.commentsUpdates.next([...this.userPosts]); 
        });
    }

    createComment(commentID: string, postID: string, userID: string, commentContent: string, dateCreated: string, postTitle: string){
        const newComment: Comment = {commentID: commentID, postID: postID, userID: userID, commentContent: commentContent, dateCreated: dateCreated, postTitle: postTitle};
        this.http.post<Array<JSON>>("http://localhost:3000/api/post/"+ postID + "/comments", newComment)
          .subscribe(responseData => {
            console.log(responseData);
            this.postComments.push(newComment);
            this.commentsUpdates.next([...this.postComments]);
          })
    }
}