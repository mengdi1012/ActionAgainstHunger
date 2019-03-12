import { Post } from "../model/post.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({providedIn: "root"})
export class PostsService {

    constructor(private http: HttpClient){}

    private classroomPosts: Post[] = [];
    private userPosts: Post[] = [];
    private postById: Post[] = [];

  private postsUpdated = new Subject<Post[]>();

    getClassroomPosts(classroomId: string){
        this.http.get<Array<JSON>>('http://localhost:3000/api/classroom/' + classroomId + "/posts")
        .subscribe((postsData) => {
            console.log(postsData);
            this.classroomPosts = [];
            if(postsData != null){
                postsData.forEach(eachPost => {
                    console.log("New Classroom Post: " + eachPost);
                    var eachPostData = eachPost["data"]
                    this.classroomPosts.push(new Post(
                        eachPost["postID"], eachPostData["userID"], eachPostData["classroomID"], eachPostData["postTitle"],
                        eachPostData["postContent"], eachPostData["dateCreated"], eachPostData["dateUpdated"], eachPostData["postType"]));
                });
            }
            this.postsUpdated.next([...this.classroomPosts]);
        });
    }

    getPostById(postId: string){
        this.http.get<Array<JSON>>('http://localhost:3000/api/post/' + postId)
        .subscribe((returnPost) => {
            console.log(returnPost);
            this.postById = [];
            if(returnPost != null){
                var postData = returnPost["data"]
                this.postById = [new Post(
                    returnPost["postID"], postData["userID"], postData["classroomID"], postData["postTitle"],
                    postData["postContent"], postData["dateCreated"], postData["dateUpdated"], postData["postType"])]
            }
            this.postsUpdated.next([...this.postById]);
        });
    }

    getPostUpdateListener() {
        return this.postsUpdated.asObservable();
    }

    getUserPosts(userId : string){
        this.http.get<Array<JSON>>('http://localhost:3000/api/user/' + userId + "/posts")
        .subscribe((postsData) => {
            console.log(postsData);
            this.userPosts = [];
            if(postsData != null){
                postsData.forEach(eachPost => {
                    var eachPostData = eachPost["data"]
                    this.userPosts.push(new Post(
                        eachPost["postID"], eachPostData["userID"], eachPostData["classroomID"], eachPostData["postTitle"],
                        eachPostData["postContent"], eachPostData["dateCreated"], eachPostData["dateUpdated"], eachPostData["postType"]));
                });
            }
            this.postsUpdated.next([...this.userPosts]);
        });
    }

    createPost(userID: string, classroomID: string, postTitle: string, postContent: string, dateCreated: string, dateUpdated: string, postType: string){
        const newPost: Post = {postID: null, userID: userID, classroomID: classroomID, postTitle: postTitle, postContent: postContent, dateCreated: dateCreated, dateUpdated: dateUpdated, postType: postType};
        this.http.post<Array<JSON>>("http://localhost:3000/api/classroom/"+ classroomID + "/posts", newPost)
          .subscribe(responseData => {
            console.log(responseData);
            this.classroomPosts.push(newPost);
            this.postsUpdated.next([...this.classroomPosts]);
          });
    }
}