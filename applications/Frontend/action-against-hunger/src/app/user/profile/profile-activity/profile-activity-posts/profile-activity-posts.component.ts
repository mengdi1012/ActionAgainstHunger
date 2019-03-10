import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../../../model/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from "../../../../service/posts.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-activity-posts',
  templateUrl: './profile-activity-posts.component.html',
  styleUrls: ['./profile-activity-posts.component.css']
})
export class ProfileActivityPostsComponent implements OnInit, OnDestroy{

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postService: PostsService, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.postService.getUserPosts("1");
    this.postsSub = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
