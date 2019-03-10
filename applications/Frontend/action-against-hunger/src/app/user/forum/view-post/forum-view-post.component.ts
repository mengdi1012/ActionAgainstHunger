import { Component, ElementRef, ViewChild } from '@angular/core';
import { Post } from '../../../model/post.model';
import { Comment } from '../../../model/comment.model';



@Component({
  selector: 'app-forum-view-post',
  templateUrl: './forum-view-post.component.html',
  styleUrls: ['./forum-view-post.component.css']
})
export class ForumViewPostComponent {
  post: Post = new Post("How to plant a tomato", "Bruhh", "Bruhh", "Bruhh");
  comments: Comment[] = [
    new Comment("How to plant a tomato", "Bruhh", "Bruhh"), 
    new Comment("How to plant a tomato", "Bruhh", "Bruhh")];

  @ViewChild('contentInput') contentRef: ElementRef;
  
  createComment(){
    const content = this.contentRef.nativeElement.value;
    console.log("Content: " + content);
  }
}
