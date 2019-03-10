import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-activity-comments',
  templateUrl: './profile-activity-comments.component.html',
  styleUrls: ['./profile-activity-comments.component.css']
})
export class ProfileActivityCommentsComponent {
  comments: Comment[] = [];
}
