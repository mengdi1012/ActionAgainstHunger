import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ForumComponent } from './user/forum/forum.component';
import { ForumHomeComponent } from './user/forum/home/forum-home.component';
import { ForumCreatePostComponent } from './user/forum/create-post/forum-create-post.component';
import { ForumViewPostComponent } from './user/forum/view-post/forum-view-post.component';
import { ProfileActivityCommentsComponent } from './user/profile/profile-activity/profile-activity-comments/profile-activity-comments.component';
import { ProfileActivityPostsComponent } from './user/profile/profile-activity/profile-activity-posts/profile-activity-posts.component';
import { ProfileActivityAllUsersComponent } from './user/profile/profile-activity/profile-activity-all-users/profile-activity-all-users.component';
import { ProfileActivityNewUserComponent } from './user/profile/profile-activity/profile-activity-new-user/profile-activity-new-user.component';
// import { AuthGuardService } from './service/auth-gaurd.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'profile', component: ProfileComponent, 
  children: [
      { path: 'profile2', component: ProfileActivityPostsComponent },
      { path: 'topics', component: ProfileActivityPostsComponent },
      { path: 'comments', component: ProfileActivityCommentsComponent },
      { path: 'allUsers', component: ProfileActivityAllUsersComponent },
      { path: 'newUser', component: ProfileActivityNewUserComponent },
  // ], canActivate: [AuthGuardService], },
  ]},{path: 'resetPW', component: ProfileComponent},
// { path: 'class', component: ForumComponent,
  //   children: [
  //       { path: '', component: ForumHomeComponent },
  //       { path: ':classId', component: ForumHomeComponent },
  //       { path: ':classId/topic/new', component: ForumCreatePostComponent },
  //       { path: ':classId/topic/:topicId', component: ForumViewPostComponent },
  //   // ], canActivate: [AuthGuardService], },
  //   ]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
