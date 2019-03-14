import { Component, ElementRef, ViewChild } from '@angular/core';
import { PostsService } from '../../../service/posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forum-create-post',
  templateUrl: './forum-create-post.component.html',
  styleUrls: ['./forum-create-post.component.css']
})
export class ForumCreatePostComponent {
  @ViewChild('titleInput') titleRef: ElementRef;
  @ViewChild('contentInput') contentRef: ElementRef;
  @ViewChild('typeInput') typeRef: ElementRef;
  public classroomId;
  
  constructor(public postService: PostsService, private activatedRoute: ActivatedRoute, private router: Router){
    this.activatedRoute.params.subscribe( params => {
      console.log(params["classId"]);
      this.classroomId = params["classId"];
    });
  }

  createPost(){
    const title = this.titleRef.nativeElement.value;
    const content = this.contentRef.nativeElement.value;
    const type = this.typeRef.nativeElement.value;
    this.postService.createPost("Admin", this.classroomId, title, content, Date.now().toString(), Date.now().toString(), type);
    this.router.navigate(['/class/' + this.classroomId]);
  }
}