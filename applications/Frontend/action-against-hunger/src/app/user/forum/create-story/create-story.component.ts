import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../../service/story.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent {

  constructor(private storyService:StoryService, private router: Router) { }

  ngOnInit() {

  }

  createStory(form): void {
    console.log("try create new post", form.value);
    var title = form.value['title'];
    var content = form.value['content'];
    var type = form.value['type'];
    console.log(title);
  this.storyService.createStory(content)
  .subscribe(
    (res: JSON[]) => {
      console.log("new post creation result:", res)
        window.alert("success");
        this.router.navigate(["/homepage/story"]).then( (e) => {
          if (e) {
            console.log("Navigation to story is successful!");
          } else {
            console.log("Navigation to story has failed!");
          }
        });
    });
}

}
