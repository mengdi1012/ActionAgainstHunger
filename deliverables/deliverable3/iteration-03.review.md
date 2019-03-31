# YOUR PRODUCT/TEAM NAME
Product name: Action Against Hunger
Team name: Hunger Team

## Iteration-03 - Review & Retrospect

* When: March 29th
* Where: Online skype meeting

## Process - Reflection

(Optional) Short introduction

#### Decisions that turned out well

* Since our project has a pretty tight timeline, most of our decisions are meant to maximize the efficiency of development in the limitation of time. So we made two following decisions:
1. Every time we come up with any new functions or features, we will have a meeting to discuss it before starting coding blindly
With this decision, we can evaluate the value of each feature better because every team member could participate in and share their valuable thinkings. Also, we could allocate the tasks more efficiently based on everyone’s strength and interest. For example, at the early of this iteration, we had a meeting talking about the backlog from D1. We sketch a general idea which components do we have, what database store, who are working a subteam for each specific feature etc. When we start actually developing features, we find out the decision to help us to develop faster and more consistent. For example, we decided together that the username in our application is unique in the database. When we start working on different page and function, we all keep this fact consistent so later when we need to find a user, we can use the username as the key to search it in the database.

2. Log the meeting every time.
We have a scrum master for each sprint, who not only needs to facilitate the meeting but also need to keep a record about the meeting. We use a google doc to record each meetings’ content including any decision we made,  any problem we found and current progress, expected time to implement etc. By recording this stuff, we can have a better idea what’s going on in the team and also a reminder to push us making forward. It can also help us to keep a record of important decisions so we will not forget in the future.


#### Decisions that did not turn out as well as we hoped

1. All team members are required to attend each meeting
Before, we thought meeting in person is the most efficient way to have a meeting. So we try to have a meeting when everyone is available. However, because of different timetables, it is very difficult to achieve this due to the other lectures or exams. As a result, we have to postpone the meeting, again and again, causing slow progress in development.

2. Set internal deadline.
The internal deadline that the team set is a day before the client deadline. However, the decision of setting the internal too close to the release deadline is not a wise idea because the team faces more unexpected problems that we did not find out and discuss our regular meeting than we imagine. Since some team members may manage the time to other assignments, it is very hard to push the internal deadline early if problems are discovered too late.

3. Split the team, half to build a web application and half to build a mobile application
The team has a weak background on building a mobile app compare to the web application. For half of the team who try to work on the mobile app, it took days to understand the previous team project and find out it is too hard to extend and continue. The progress of working on mobile will be much longer than the web and the structure inside is also different. It is like we separate into two teams and working completely separate. Therefore, we decided to not continue doing mobile application but refactor it into a web application instead since web app is more convenient for users to make posts, manager users(admin), create student accounts(teacher).


#### Planned changes

1. Instead of the whole team meeting each time, we can also take sub-team meetings. So everyone can contact and meet with other team members who are working in the same feature in their own time. It is more efficient and practical.
2. As the development of the project becomes more complex, the more chance bugs occur.  To reduce the possibility of creating a potential bug, the team has to leave useful comments and commit message. For commit message, we decide to be consistent: start with feature/bug/document and followed by a brief explanation of what you did. In that case, if there a conflict, it will be easier for others to understand and decide how to resolve the conflict.




## Product - Review

#### Goals and/or tasks that were met/completed:
1. Identify the 4 types of intended user and assign different permissions for them for better management and security of personal information:
- Students: anonymous account,  Invited to login Make posts/View posts/Comment on posts. Can’t create an account or change their username for safety reason.
- Teachers: create a pool of users for students, Post educational information/news, view students’ name, and their student id to better manage students.
- Professionals: login, publish posts and answer questions.
- Admin:  Create accounts for teachers and food professionals, view all the user's information etc.

2.  The interactions among users:
- A strong focus on posting, texts and reading/commenting on others’ posts so that users can interact with others.

3. Receiving notification when users are tagged from the post so that the user can easily follow the ongoing communication. For example, students attend activities for growing tomatoes, post their tomatoes’ photos, and receive feedback and comment from their peers.



#### Goals and/or tasks that were planned but not met/completed:
- Ask questions and invite nutrition experts to provide professional answers.
"gamifying" food education to increase student interest and retention
Providing challenges for students and rewarding systems to let students gain a sense of achievement

* "gamifying" food education: The team can build this after the team finishes all activities features like posting, commenting, likes, etc. so that the team can decide with our partner how the reward system would be more encouraging for students to participate. The reward system to "gamifying" food education can only be reasonable and well designed after partner has a better idea of what the web app can do and can use the rewarding system to guide students to learn food knowledge. However, the time interval between deliverable 2 and deliverable 3 is quite short and many of our team members have to spend time on our courses  the limited time restrict us from continue building this feature.


## Meeting Highlights

Going into the next iteration, our main insights are:

* Angular is a very powerful framework for frontend. To incorporate our front end into Angular2 can better organize the front end css, HTML, and type script by component so that the code is better organized.
* The feature that is needed to be implemented in this iteration is the notification feature and the activity feature. These features can help users better communicate with each other when a comment is made, the user can get noticed as soon as possible. It conserves the passion to communicate and share knowledge.

