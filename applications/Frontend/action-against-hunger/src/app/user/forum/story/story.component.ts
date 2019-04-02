import { Component } from '@angular/core';
import { Story } from '../../../model/story.model';
import { StoryService } from '../../../service/story.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent {
  stories: Story[] = [];

  constructor(public storyService: StoryService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.getPost();
  }

  getPost(): void {
    console.log("try to load stories list");
    this.storyService.getStory()
      .subscribe(stories => {
        console.log("story is ", stories);
        this.stories = stories;
     
      })

  };

  updateLike(story: Story): void {
    console.log("try to load stories list");
    this.storyService.updateLike(story.storyId)
      .subscribe(res => {
        console.log("res is ", res);
        story.like += 1;
      })
  };

  
}
