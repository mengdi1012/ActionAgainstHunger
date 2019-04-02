import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ForumComponent } from './user/forum/forum.component';
import { ForumPublicComponent } from './user/forum/public/forum-public.component';
import { StoryComponent } from './user/forum/story/story.component';
import { CreateStoryComponent } from './user/forum/create-story/create-story.component';


import { PrivateComponent } from './user/forum/private/private.component';
import { ForumCreatePostComponent } from './user/forum/create-post/forum-create-post.component';
import { ForumViewPostComponent } from './user/forum/view-post/forum-view-post.component';
import { ProfileActivityCommentsComponent } from './user/profile/profile-activity/profile-activity-comments/profile-activity-comments.component';
import { ProfileActivityPostsComponent } from './user/profile/profile-activity/profile-activity-posts/profile-activity-posts.component';
import { ProfileActivityAllUsersComponent } from './user/profile/profile-activity/profile-activity-all-users/profile-activity-all-users.component';
import { ProfileActivityNewStudentComponent } from './user/profile/profile-activity/profile-activity-new-student/profile-activity-new-student.component';
import {ProfileActivityUpdateComponent} from './user/profile/profile-activity/profile-updatePW/profile-activity-updatePW.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileActivityNotificationComponent } from './user/profile/profile-activity/profile-activity-notification/profile-activity-notification.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'signup', component: SignupComponent},
    {
        path: 'homepage', component: ForumComponent,
        children: [
            { path: 'public', component: ForumPublicComponent },
            { path: 'private', component: PrivateComponent },
            { path: 'story', component: StoryComponent },
            { path: 'createpost', component: ForumCreatePostComponent },
            { path: 'createstory', component: CreateStoryComponent },
            { path: 'postdetail/:postId', component: ForumViewPostComponent },
            { path: 'profile', component: ProfileComponent,
                children: [
                    { path: 'topics', component: ProfileActivityPostsComponent },
                    { path: 'comments', component: ProfileActivityCommentsComponent },
                    { path: 'allUsers', component: ProfileActivityAllUsersComponent },
                    { path: 'newstudent', component: ProfileActivityNewStudentComponent },
                    { path: 'update_pw', component: ProfileActivityUpdateComponent },
                    { path: 'notification', component: ProfileActivityNotificationComponent},
                ],
            },
        ]
    },

//  { path: 'class', component: ForumComponent,
//      children: [
//          { path: '', component: ForumPublicComponent },
//          { path: ':classId', component: ForumPublicComponent },
//          { path: ':classId/topic/new', component: ForumCreatePostComponent },
//          { path: ':classId/topic/:topicId', component: ForumViewPostComponent }
// ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
