# YOUR PRODUCT/TEAM NAME
Product name: Action Against Hunger
Team name: Hunger Team

## Iteration-03 - Review & Retrospect

* When: March 29th
* Where: Online skype meeting

## Process - Reflection

(Optional) Short introduction

#### Decisions that turned out well

*  So we made two following decisions:
1.  commit comment describes with the change:
- To write a good commit message, the commit message should contain a brief description of what changes are made. For example, "change create user component" is not a good enough commit message. "create user component change backend createUser() " is a better commit message and it shows the specific function that is modified.

2. Keep master branch runnable and developed on a local branch
- The master branch will only keep changes/ commits. If any team member makes mistakes on a local branch, the master branch will not be affected. For example, for our deliverable 2, someone git push -f on the master branch. Many of the commits are deleted and sometimes we can never get it back.

3. Always verify the local branch before merge to master
- The master branch will only keep changes/ commits that are verified by the team. The team does not want changes merged from branches that can lead to error. The changes need to be effective but not random.


#### Decisions that did not turn out as well as we hoped

1. Using Angular2 as the front-end framework
- Angular2 is a very powerful tool to build a web application. The team already starts the front end with Javascript, Bootstrap, HTML, and CSS. Since Angular2 has different syntax from and using typescript instead of Javascript. The team has to learn Angular2 and refactor the code for Angular2. It takes more time than we expected.



2. Too many branches from Github.
-The team wants to use different branches for each team members. It is very hard to tell which team member is working on what kind of feature and what their commit can effect. It would be better to separate branches by features. It is more clear because every team member who works on this feature can verify the change.


#### Planned changes

1. The team changes the frontend using Angular2 which is a more powerful web application platform.
2. The decision of making the "gamify" feature, the team cannot do the "gamify" feature within 2 weeks since this is the least prioritized optional feature for our partner. The time restriction does not allow us to discuss the scoring system for "gamify" feature and implement it.




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

- "gamifying" food education to increase student interest and retention
Providing challenges for students and rewarding systems to let students gain a sense of achievement
* To invite expert to answer questions：A hash tag system is too complicated to build and it needs to use the notification as well to recieve notification message.

* "gamifying" food education: The team can build this after the team finishes all activities features like posting, commenting,  likes, notification, etc. so that the team can decide with our partner how the reward system would be more encouraging for students to participate. The reward system to "gamifying" food education can only be reasonable and well designed after partner has a better idea of what the web app can do and can use the rewarding system to guide students to learn food knowledge. However, the time interval between deliverable 2 and deliverable 3 is quite short, and the team thinks notification feature is more urgent than this feature.



## Meeting Highlights

Going into the next iteration, our main insights are:

* Angular is a very powerful framework for frontend. To incorporate our front end into Angular2 can better organize the front end css, HTML, and type script by component so that the code is better organized.
* The feature that is needed to be implemented in this iteration is the notification feature and the activity feature. These features can help users better communicate with each other when a comment is made, the user can get noticed as soon as possible. It conserves the passion to communicate and share knowledge.

