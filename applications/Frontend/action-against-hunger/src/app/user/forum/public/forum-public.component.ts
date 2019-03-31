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

    this.activatedRoute.params.subscribe( params => {
      console.log(params["classId"]);
      this.classroomId = params["classId"];
      // this.postService.getClassroomPosts(this.classroomId);
      // this.postsSub = this.postService.getPostUpdateListener()
      //   .subscribe((posts: Post[]) => {
      //     this.posts = posts;
      // });
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  redirect(postID: string){
    console.log(postID);
    this.router.navigate(['/class/' + this.classroomId + '/topic/' + postID]);
  }
}
