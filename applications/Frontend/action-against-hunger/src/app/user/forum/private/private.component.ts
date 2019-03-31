import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Post } from '../../../model/post.model';
import { PostsService } from '../../../service/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../../../service/users.service';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-private-page',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit, OnDestroy{
  posts: Post[] = [];
  private postsSub: Subscription;
  private classroomId: string;
  private username: string;
  user: User;

  constructor(public postService: PostsService, private activatedRoute: ActivatedRoute, private router: Router,private userService: UsersService){
  this.getUser();
  }

  ngOnInit(){
    this.getUser();
  }

  getUser(): void {
    console.log("try get user info");
    this.userService.getUserInfo()
      .subscribe(user => {
        this.user = user
        if(user["username"] != ""){
          this.getPosts();
        }else{
          window.alert("not valid session");
        }          
      });
  }

  getPosts(): void {
    console.log("try to load student list");
    console.log(this.user["username"]);
    this.postService.getPostsByUser(this.user["username"])
      .subscribe(posts => this.posts = posts)
  };

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

 
}
