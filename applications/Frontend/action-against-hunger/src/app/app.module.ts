import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './user/navigation-bar/navigation-bar.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ProfileActivityComponent } from './user/profile/profile-activity/profile-activity.component';
import { ProfileOverviewComponent } from './user/profile/profile-overview/profile-overview.component';
import { ForumComponent } from './user/forum/forum.component';
import { ForumHomeComponent } from './user/forum/home/forum-home.component';
import { ForumCreatePostComponent } from './user/forum/create-post/forum-create-post.component';
import { AppRoutingModule } from './app-routing.module';
import { ForumViewPostComponent } from './user/forum/view-post/forum-view-post.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileActivityCommentsComponent } from './user/profile/profile-activity/profile-activity-comments/profile-activity-comments.component';
import { ProfileActivityPostsComponent } from './user/profile/profile-activity/profile-activity-posts/profile-activity-posts.component';
import { ProfileActivityUsersComponent } from './user/profile/profile-activity/profile-activity-users/profile-activity-users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProfileComponent,
    ProfileActivityComponent,
    ProfileActivityCommentsComponent,
    ProfileActivityPostsComponent,
    ProfileActivityUsersComponent,
    ProfileOverviewComponent,
    ForumComponent,
    ForumHomeComponent,
    ForumCreatePostComponent,
    ForumViewPostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
