import { Post } from "../model/post.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: "root"})
export class PostsService {

    constructor(private http: HttpClient){}

    private classroomPosts: Post[] = [
        new Post("How to plant a tomato", "Bruhh", "Bruhh", "Bruhh"), 
        new Post("How to plant a tomato", "Bruhh", "Bruhh", "Bruhh")];

    private userPosts: Post[] = [];

    getClassroomPosts(classroomId: string){
        this.http.get<{posts: Post []}>('http://localhost:3000/api/classroom/' + classroomId + "/posts")
        .subscribe((postsData) => {
            this.classroomPosts = postsData.posts;
        });
    }

    getUserPosts(userId : string){
        this.http.get<{posts: Post []}>('http://localhost:3000/api/user/' + userId + "/posts")
        .subscribe((postsData) => {
            console.log("Getting User Posts");
            this.userPosts = postsData.posts;
        });
    }

    createPost(title: string, classroom: string, content: string){
        const newPost: Post = {title: title, username: content, content: content, date: content};
        this.classroomPosts.push(newPost);
    }
}