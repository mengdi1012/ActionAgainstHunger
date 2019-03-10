import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ProfileComponent } from './user/profile/profile.component';
import { ForumComponent } from './user/forum/forum.component';
import { ForumHomeComponent } from './user/forum/home/forum-home.component';
import { ForumCreatePostComponent } from './user/forum/create-post/forum-create-post.component';
import { ForumViewPostComponent } from './user/forum/view-post/forum-view-post.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileActivityCommentsComponent } from './user/profile/profile-activity/profile-activity-comments/profile-activity-comments.component';
import { ProfileActivityPostsComponent } from './user/profile/profile-activity/profile-activity-posts/profile-activity-posts.component';
import { ProfileActivityUsersComponent } from './user/profile/profile-activity/profile-activity-users/profile-activity-users.component';

const appRoutes: Routes = [
  { path: '', component: ProfileComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent , 
  children: [
      { path: '', component: ProfileActivityPostsComponent  },
      { path: '1', component: ProfileActivityPostsComponent },
      { path: '2', component: ProfileActivityCommentsComponent },
      { path: '3', component: ProfileActivityUsersComponent },
  ] },
  { path: 'class', component: ForumComponent, 
    children: [
        { path: '', component: ForumHomeComponent },
        { path: ':classId', component: ForumHomeComponent },
        { path: ':classId/topic/new', component: ForumCreatePostComponent },
        { path: ':classId/topic/:topicId', component: ForumViewPostComponent },
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
