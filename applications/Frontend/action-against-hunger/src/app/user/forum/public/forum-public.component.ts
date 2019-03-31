import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Post } from '../../../model/post.model';
import { PostsService } from '../../../service/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forum-pubcli',
  templateUrl: './forum-public.component.html',
  styleUrls: ['./forum-public.component.css']
})
export class ForumPublicComponent implements OnInit, OnDestroy{
  posts: Post[] = [];
  private postsSub: Subscription;
  private classroomId: string;

  constructor(public postService: PostsService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(){
  this.getPost();

  }

  getPost(): void {
    console.log("try to post list");
    this.postService.getPublicPosts()
      .subscribe(posts => this.posts = posts)
  };


  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
