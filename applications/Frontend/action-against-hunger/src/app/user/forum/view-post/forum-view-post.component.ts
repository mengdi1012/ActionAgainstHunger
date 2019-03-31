import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../../model/post.model';
import { Comment } from '../../../model/comment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from "../../../service/posts.service";
import { CommentsService } from "../../../service/comments.service";


@Component({
  selector: 'app-forum-view-post',
  templateUrl: './forum-view-post.component.html',
  styleUrls: ['./forum-view-post.component.css']
})
export class ForumViewPostComponent{
  post: Post;
  comments: Comment[];
  myComment: string;
  private postId: string;

  @ViewChild('contentInput') contentRef: ElementRef;

  ngOnInit(){
    this.getPost();
    this.getComments();
    this.post.content.replace(new RegExp("\n", 'g'), "<br />")
  }

  constructor(public commentService: CommentsService, public postService: PostsService, private activatedRoute: ActivatedRoute, private router: Router){
    this.activatedRoute.params.subscribe( params => {
      this.postId = params["postId"];
    });
  }

    getPost(): void {
        console.log("try to load post detail ", this.postId);
        this.postService.getPostDetail(this.postId)
            .subscribe(post => this.post = post)
    };

    getComments(): void {
      console.log("try to load comments ", this.postId);
      this.commentService.getComments(this.postId)
          .subscribe(
            comments => this.comments = comments,
            err => window.alert("some error happending ,please try again")
          );
    }

    createComment(){
      console.log("here is your comment", this.myComment);
      this.commentService.createComment(this.postId, this.myComment)
      .subscribe((res: string) => {
        console.log("sending invitation email result:", res)
        if(res["result"] == "success"){
          window.alert("success");
          window.location.reload();
        }else{
          window.alert("something wrong, please try again");
        }
      });
    }


}
