import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../../../model/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../../../service/posts.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../service/auth.service';

@Component({
  selector: 'app-profile-activity-posts',
  templateUrl: './profile-activity-posts.component.html',
  styleUrls: ['./profile-activity-posts.component.css']
})
export class ProfileActivityPostsComponent implements OnInit, OnDestroy{

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postService: PostsService, private activatedRoute: ActivatedRoute, private authService: AuthService){
    console.log("Creating Profile Activity Posts Component");
  }

  ngOnInit(){
    console.log("Getting User Posts (Component)")
    var userID = this.authService.getUserID();
    // this.postService.getUserPosts(userID.toString());
    // this.postsSub = this.postService.getPostUpdateListener()
    //   .subscribe((posts: Post[]) => {
    //     console.log(posts);
    //     this.posts = posts;
    //   });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
