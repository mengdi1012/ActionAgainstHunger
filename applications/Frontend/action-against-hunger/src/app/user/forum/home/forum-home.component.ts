import { Component, OnInit } from '@angular/core';
import { Post } from '../../../model/post.model';
import { PostsService } from '../../../service/posts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-forum-home',
  templateUrl: './forum-home.component.html',
  styleUrls: ['./forum-home.component.css']
})
export class ForumHomeComponent implements OnInit{
  posts: Post[] = [];

  constructor(public postService: PostsService, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.postService.getClassroomPosts("1");
    this.activatedRoute.params.subscribe( params => console.log(params) );
  
  }

}
