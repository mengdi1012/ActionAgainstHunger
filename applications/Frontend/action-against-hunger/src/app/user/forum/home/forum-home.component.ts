import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../../model/post.model';
import { PostsService } from '../../../service/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forum-home',
  templateUrl: './forum-home.component.html',
  styleUrls: ['./forum-home.component.css']
})
export class ForumHomeComponent implements OnInit, OnDestroy{
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postService: PostsService, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    var classId;
    this.activatedRoute.params.subscribe( params => classId = params["classId"] );
    this.postService.getClassroomPosts(classId);
    this.postsSub = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
