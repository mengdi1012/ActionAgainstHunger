import { Component, ElementRef, ViewChild } from '@angular/core';
import { PostsService } from '../../../service/posts.service';

@Component({
  selector: 'app-forum-create-post',
  templateUrl: './forum-create-post.component.html',
  styleUrls: ['./forum-create-post.component.css']
})
export class ForumCreatePostComponent {
  @ViewChild('titleInput') titleRef: ElementRef;
  @ViewChild('contentInput') contentRef: ElementRef;
  
  constructor(public postService: PostsService){}

  createPost(){
    const title = this.titleRef.nativeElement.value;
    const content = this.contentRef.nativeElement.value;
    this.postService.createPost(title, content, content);
  }
}
