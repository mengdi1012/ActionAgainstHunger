import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../model/post.model';
import { PostsService } from "../../../../service/posts.service";


@Component({
  selector: 'app-profile-activity-posts',
  templateUrl: './profile-activity-posts.component.html',
  styleUrls: ['./profile-activity-posts.component.css']
})
export class ProfileActivityPostsComponent implements OnInit{
  posts: Post[] = [];
  constructor(public postService: PostsService){}

  ngOnInit(){
    this.postService.getUserPosts("2");
  }
}
