import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './user/navigation-bar/navigation-bar.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ProfileActivityComponent } from './user/profile/profile-activity/profile-activity.component';
import { ProfileOverviewComponent } from './user/profile/profile-overview/profile-overview.component';
import { ForumComponent } from './user/forum/forum.component';
import { ForumPublicComponent } from './user/forum/public/forum-public.component';
import { ForumCreatePostComponent } from './user/forum/create-post/forum-create-post.component';
import { AppRoutingModule } from './app-routing.module';
import { ForumViewPostComponent } from './user/forum/view-post/forum-view-post.component';
import { ProfileActivityCommentsComponent } from './user/profile/profile-activity/profile-activity-comments/profile-activity-comments.component';
import { ProfileActivityPostsComponent } from './user/profile/profile-activity/profile-activity-posts/profile-activity-posts.component';
import { ProfileActivityAllUsersComponent } from './user/profile/profile-activity/profile-activity-all-users/profile-activity-all-users.component';
import { ProfileActivityNewStudentComponent } from './user/profile/profile-activity/profile-activity-new-student/profile-activity-new-student.component';
import {ProfileActivityUpdateComponent} from './user/profile/profile-activity/profile-updatePW/profile-activity-updatePW.component';
// import { AuthGuardService } from './service/auth-gaurd.service';
import { LoginComponent } from './login/login.component';
import {ActivityComponent} from './activity/activity.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileActivityNotificationComponent } from './user/profile/profile-activity/profile-activity-notification/profile-activity-notification.component';
import { MatNativeDateModule } from '@angular/material';
import {DemoMaterialModule} from './material-module';
import { PrivateComponent } from './user/forum/private/private.component';
import { StoryComponent } from './user/forum/story/story.component';
import { CreateStoryComponent } from './user/forum/create-story/create-story.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProfileComponent,
    ProfileActivityComponent,
    ProfileActivityCommentsComponent,
    ProfileActivityPostsComponent,
    ProfileActivityAllUsersComponent,
    ProfileActivityNewStudentComponent,
    ProfileOverviewComponent,
    ProfileActivityUpdateComponent,
    PrivateComponent,
    ForumComponent,
    ForumPublicComponent,
    ForumCreatePostComponent,
    ForumViewPostComponent,
    LoginComponent,
    ActivityComponent,
    AdminComponent,
    AdminNavigationComponent,
    SignupComponent,
    ProfileActivityNotificationComponent,
    StoryComponent,
    CreateStoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    DemoMaterialModule
  ],
  // providers: [AuthGuardService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
