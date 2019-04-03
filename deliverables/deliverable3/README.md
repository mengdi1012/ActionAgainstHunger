# YOUR PRODUCT/TEAM NAME
Product name: Action Against Hunger
Team name: Hunger Team

## Description
* - Our web application is a platform for participants of Action Against Hunger’s Nutrition Program to connect with teachers, professionals and  students. It is meant to connect students from all over the world who are enrolled in the Nutrition program as well as to provide a place where food/nutrition professionals can posts articles and answer questions to educate the youth.

* The problem is how we can build connections between students, teachers and professions in the Action Against Hunger educational program.

- We are trying to build an application where:
* Students can interact with one another through posts.
* Teachers can interact with students through posts.
* Different schools participating in the Action Against Hunger program can communicate to one another through posts, challenges and activities.

*There is a need for a separate app rather than having some sort of social media group (FB group, etc), because a majority of the users will be students. This means that privacy must be handled appropriately as the users can be as young as 8 years old. It is also better to have everyone on one separate platform because there is less room for distractions and misuse.


* We have strict account creations mechanism to keep the user privacy safely in the community. The post feature allows students, teachers and professions to make and view posts from each other so that they can connect/communicate to each other across the world, breaking the geographical restrictions.


## Key Features
*User accounts:
- We have four user types - **student, teacher, guest and admin**.
    1. Admin can send an invitation email to teacher or guest which contains a link pointing to the signup page.
    2. Uninvited users are not able to sign up
    3. Teachers could create a pool of student accounts by providing a pool of nicknames and a default password. Our app will automatically generated a pool of accounts with unique usernames consisting of school names and an ID.
    4. Teacher can always check the current students list containing the pair of  student’s nickname and username, so that they can recognize students’ identity.

*Posts:
1. User can view the all the global posts after they log in to webapp.
2. User can view the school's posts by clicking the private button on the mainpage.
3. On the individual post page, user can post comment under that post.
4. User can also make their own post, they can choose to post to gloal page or the private page. For the global posts, anyone can view that, the the private posts, only user in that school can view.

*  Notification: Receiving notification when users are tagged from the post so that the user can easily follow the ongoing communication. For example, students attend activities for growing tomatoes, post their tomatoes’ photos, and receive feedback and comment from their peers.



## Instructions
- Access:
    The application has already deployed on Heroku with the following url
    https://action-against-hunger-backend.herokuapp.com

- Accounts:
- admin account are pre-created:
    - username:admin / password: admin123
- We also have a pre-created the accounts for other user types  
    - Teacher account: t1_uoft / password:123456  
    - Student account: uoft_student_0 / password: 123456  
    - Guest account: : pro1_food / password: 123456  


As **admin**: you can invite teacher and guest
Steps:
1. Enter admin username and password: admin / admin123
2. Click SignIn button
3. Enter a valid email of the person you want to invite
    e.g: helloteacher@mailinator.com
4. Choose what type of user that person will be by click on the radio button between teacher and guess
5. Click send invitation button (if success click on the “ok” button)
6. Click the logout button on the right top to logout

As **New teacher**: sign up an account
Steps:
1. Go to your personal email to check received email from action against hunger
e.g: go to https://www.mailinator.com/, type "helloteacher"
2. Click the sign up link in the email
3. Enter the same email where you received that link.
4. Enter your nickname
e.g: newteacher
5. Enter a password
e.g: 123456
6. Enter the school where you teach
e.g: uoft
7. Click "Create my unique username" to generate an username, it should be "newteacher_uoft"
8. Enter your username(newteacher_uoft) and password(123456) and click sign in

As a **teacher**: create pool of students account
Steps:
1. sign in with Teacher account: t1_uoft / password:123456
2. Click the profile button at the navigation bar in the home page
3. Click (New Students) button
4. Click add or delete one more student button to adjust suitable number of rows
5. Enter the nickname for new students like “mengdi, jayson, jerry ,faye”
6. Set a default password like “123456”
7. Click create all students accounts
8. Click the success button in alert window
9. Click Public and then click profile again on the navigation bar
9. You can now review the just added students list in table on left side


As a **teacher**: View post and create post     
Create the post:    
   1. sign in with Teacher account: **User:** t1_uoft / **Password**:123456
   2. on home page click the new post button, the page will redirect to the page for create post.
   3. In the create post page, user can type the title, type(either public or private) and content for the post.
   4. Click the post button and the page will redirect to public posts page where you can find the new posts

View post:  
Steps:  
   1. sign in with Teacher account: **User:** t1_uoft / **Password**:123456  
   2. On homepage they can click the public button to view the public posts, they can click the title of each post to go into details of each posts.
   3. On homepage they can click the private the button to view the posts for their school's posts, they can click the title of each post to go into details of each posts.
   4. to view the post detail, just click each post's title

 
Make comments:  
Steps:  
   1. sign in with Teacher account: t1_uoft / password:123456
   2. click one of the listed post's title to check the post detail  
   3. You can make your comment at the bottom and click post
   4. redo step 2 to see your new comment
   
Get and Send Notification:  
Steps:  
 1.  Sign in with student account: uoft_student_0 / password:123456  
 2.  click one of the post whose author are t1_uoft  
 3.  Make a comment for the post  
 4.  Logout by clicking the logout button on the navigation bar  
 5.  sign in with teacher account: t1_uoft / password: 123456  
 6.  Go to profile page by clicking profile button on navigation bar  
 7.  Click my message and you will see the notification of comment made in step 3      
 8. click the "view it" will redirect the page to the corresponding post detail   
 
As a **student**: write and like stories:  
Steps:  
    1.  Sign in with student account: uoft_student_0 / password:123456
    2.  Click Story on the navigation bar  
    3. Stories from different students are listed their  
    4. Click the Like button to like a story and you can see the likes change immediately  
    5. In future, the likes could be integrated into gamify functions  

Every user:  update password  
Steps:  
 1. sign in with any user except admin
 2. click the profile button at the navigation bar, the page will redirect to profile page
 3. Click (Reset Password) button
 4. enter a password and click submit
 5. Click the success alert, it will redirect to profile page
 6. logout and try login with new password to see the password change
 


