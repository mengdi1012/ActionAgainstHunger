# YOUR PRODUCT/TEAM NAME
Product name: Action Against Hunger
Team name: Hunger Team

## Description
Provide a high-level description of your application and it's value from an end-user's perspective
- Our web application is a platform for participants of Action Against Hunger’s Nutrition Program to connect with teachers, professionals and other students. It is meant to connect students from all over the world who are enrolled in the Nutrition program as well as to provide a place where food/nutrition professionals can posts articles and answer questions to educate the youth.

What is the problem you're trying to solve?
- How can we build connections between students, teachers and professions in the Action Against Hunger educational program?

- We are trying to build an application where:
  * Students can interact with one another through posts.
  * Teachers can interact with students through posts.
  * Different schools participating in the Action Against Hunger program can communicate to one another through posts, challenges and activities.

There is a need for a separate app rather than having some sort of social media group (FB group, etc), because a majority of the users will be students. This means that privacy must be handled appropriately as the users can be as young as 8 years old. It is also better to have everyone on one separate platform because there is less room for distractions and misuse.


 Is there any context required to understand **why** the application solves this problem?

- We have strict account creations mechanism to keep the safety of the community. We have a post feature that allows students, teachers and professions to make and view posts from each other. Only teachers/students of the program will have access to this app. Any guest users will be given access through the organization.

## Key Features
User accounts:
- We have four user types - **student, teacher, guest and admin**.
    1. Admin can send an invitation email to teacher or guest which contains a link pointing to the signup page.
    2. Uninvited users are not able to sign up
    3. Teachers could create a pool of student accounts by providing a pool of nicknames and a default password. Our app will automatically generated a pool of accounts with unique usernames consisting of school names and an ID.
    4. Teacher can always check the current students list containing the pair of  student’s nickname and username, so that they can recognize students’ identity.

Posts:
1. User can view the global posts which are sorted by the post date.
2. User can search post by using post id / title and enter into the corresponding post page.
3. On the individual post page, user can post comment under that post and leave the follow up comment.
4. User can also make their own post, each type of user will have their characteristic post page.

## Instructions
- Access:
    The application has already deployed on Heroku with the following url
    https://action-against-hunger.herokuapp.com/

- Accounts:
    admin account are pre-created:
    username:admin / password: admin123
    We also have a pre-created the accounts for other user types
    Teacher account: t1_uoft / password:123456
    Student account: uoft_student_0 / password: 123456
    Guest account: : pro1_food / password: 123456


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
2. Click the profile button at the navigation bar
3. Click create students account button
4. Click add or delete one more student button to adjust suitable number of rows
5. Enter the nickname for new students like “mengdi, jayson, jerry ,faye”
6. Set a default password like “123456”
7. Click create all students accounts
8. Click the success button in alert window and the page will redirect to profile
9. You can now review the just added students list in table on left side

For Posts, we implement most functions in backend. But the corresponding front end are implemented in another angular project. We plan to move all current front end to angular in next iteration. Therefore the current web app's front end is a legacy, we just provide a brief idea about how this will work.

As a teacher: View post and create post
   Create the post:
   1. sign in with Teacher account: **User:** t1_uoft / **Password**:123456
   2. click the new post button, the page will redirect to the page for create post.
   3. In the create post page, user can type the title, type and content for the post.
   4. Click the create button to create the post and store it in database.


View post:
   1. sign in with Teacher account: **User:** t1_uoft / **Password**:123456
   2. Click the title of the post to go into the corresponding post page or they can use the search functionality to do that(for now we don’t implement the full functionality for this, only implement partial functionality, it will be completed on deliverable 3 ).
   3. User can type the post title in the text area beside the reach button, then use search to search the corresponding page.
   4. User can also use the refresh button to display the newest post in the global post page.(for now we don’t implement the full functionality for this, only implement partial functionality, it will be completed on deliverable 3 )

Make comments:
   1. sign in with Teacher account: t1_uoft / password:123456
   2. Click Search button, assume we search some post
   3. User can make comments through the comment box on the bottom of the page.
   4. User can use refresh button to display the newest comments for this post.

Every user:  update password
Steps:
   1. sign in with any user except admin
   2. click the profile button at the navigation bar, the page will redirect to profile page
   3. Click update password button, it will redirect to password update page
   4. enter a password and click submit
   5. Click the success alert, it will redirect to profile page
   6. logout and try login with new password
