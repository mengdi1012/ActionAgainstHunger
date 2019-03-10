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
            postsData.forEach(eachPost => {
                this.classroomPosts.push(new Post(eachPost["content"], eachPost["content"], eachPost["content"], eachPost["content"]));
            });
            this.postsUpdated.next([...this.classroomPosts]);
        });
    }

    getPostById(postId: string){
        this.http.get<Array<JSON>>('http://localhost:3000/api/post/' + postId)
        .subscribe((postsData) => {
            console.log(postsData);
            this.postById = [];
            postsData.forEach(eachPost => {
                this.classroomPosts.push(new Post(eachPost["content"], eachPost["content"], eachPost["content"], eachPost["content"]));
            });
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
            this.classroomPosts = [];
            postsData.forEach(eachPost => {
                this.classroomPosts.push(new Post(eachPost["content"], eachPost["content"], eachPost["content"], eachPost["content"]));
            });
            this.postsUpdated.next([...this.classroomPosts]);
        });
    }

    createPost(title: string, classroomId: string, content: string){
        const newPost: Post = {title: title, username: content, content: content, date: content};
        this.http.post<Array<JSON>>("http://localhost:3000/api/classroom/"+ classroomId + "/posts", newPost)
          .subscribe(responseData => {
            console.log(responseData);
            this.classroomPosts.push(newPost);
            this.postsUpdated.next([...this.classroomPosts]);
          });
    }
}