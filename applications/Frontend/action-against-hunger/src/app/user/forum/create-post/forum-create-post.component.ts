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
    });
  }

  createPost(form): void {
      console.log("try create new post", form.value);
      var title = form.value['title'];
      var content = form.value['content'];
      var type = form.value['type'];
      console.log(title);
    this.postService.createPost(title, content, type)
    .subscribe(
      (res: JSON[]) => {
        console.log("new post creation result:", res)
          window.alert("success");
          this.router.navigate(["/homepage/public"]).then( (e) => {
            if (e) {
              console.log("Navigation to login is successful!");
            } else {
              console.log("Navigation to login has failed!");
            }
          });
      });
  }
}
