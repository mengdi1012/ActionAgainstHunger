import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Post } from '../../../model/post.model';
import { PostsService } from '../../../service/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../../../service/users.service';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-private-page',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent{
  user: User;
  posts: Post[] = [];
  private postsSub: Subscription;
  private classroomId: string;

  constructor(public postService: PostsService, private activatedRoute: ActivatedRoute, private router: Router, private usersService: UsersService){}

  ngOnInit(){
    console.log("try get user info");
    this.usersService.getUserInfo()
      .subscribe(user => {
        console.log("get response:", user)
        if(user["username"] != ""){
          this.user = user;
          console.log("get user detail, ", user)
          this.getSchoolPost();
        }else{
          this.router.navigate(["/"]).then( (e) => {
            if (e) {
              console.log("Navigation to login is successful!");
            } else {
              console.log("Navigation to login has failed!");
            }
          });
        }          
      });
    }


getSchoolPost(): void {
    console.log("try to load post list");
    this.postService.getPostsBySchool(this.user.school)
      .subscribe(posts => this.posts = posts)
  };

    goPostDetail(postId: string) {
        console.log("go to post detail");
        const url = '/postdetail/' + postId;
        console.log(url)
        this.router.navigate([url]).then((e) => {
            if (e) {
                console.log('Navigation is successful!');
            } else {
                console.log('Navigation has failed!');
            }
        });
    }
}
