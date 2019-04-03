# YOUR PRODUCT/TEAM NAME
Product name: Action Against Hunger
Team name: Hunger Team

## Iteration-03 - Review & Retrospect

* When: March 29th
* Where: Online skype meeting

## Process - Reflection

(Optional) Short introduction

#### Decisions that turned out well

1. Never merge blindly or use git command with --force or any other commands that are not familiar   
    The master branch will only keep commits that are verified by the team. The team does not want changes merged from branches that may lead to error. Since we use pull-request to merge branach. We will ask two team members to review it. When there is a conflict, we may either reject the pull-request or resolve the conflict on github, but never merge it blindly. Besides, no one should use git command with --force for any reason. Since, for our deliverable 2, someone use git push --force on the master branch. Many of the commits are deleted and sometimes we can never get them back.  
    
2. Always keep master branch runnable and only develop new feature on different branches, and make pull-request  
    The master branch should only keep implmented features. Features that are developing should be on other branches. Therefore, when a team member breaks his build, the master branch and others branches will not be affected.
    
3. Commit message should clearly describes the change:  
    A good commit message should contain a brief description of what the changes are made. For example, "change create user component" is not a good enough commit message. "create user component change backend createUser() " is a better commit message and it shows the specific function that is modified.






#### Decisions that did not turn out as well as we hoped

1. Using Angular as the front-end framework  
    Angular is a very powerful tool to build the web application. But it has very different structures and syntax to plain Javascript. And most of the team members are not familiar with it. Therefore, the team has to learn Angular and refactor the previous developed front-end code for Angular. It takes more time to study than we expected.


2. Everyone works on their own branch.    
    We encourage that everyone should create their own branch. 
    And each branch should be linked to each feature. However, we ignore the fact that two or more people may work on the same feature together. It cause some similar and confusing branch name on git. We should split main features to several main branch at first and everyone should create sub branches to working on their own part of each feature.
    It is more clear to because every team member who works on this feature can verify the change.


#### Planned changes

1. The team changes the frontend using Angular which is a more powerful web application platform.
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
- Students can share stories and like others' stories, which could motivate students be more engaged to this plateform to share their leaning, thinking and introduce more interaction between each other.    

3. Receiving notification when users are tagged from the post so that the user can easily follow the ongoing communication. For example, students attend activities for growing tomatoes, post their tomatoes’ photos, and receive feedback and comment from their peers.



#### Goals and/or tasks that were planned but not met/completed:

- "gamifying" food education to increase student interest and retention
Providing challenges for students and rewarding systems to let students gain a sense of achievement
* To invite expert to answer questions：A hash tag system is too complicated to build and it needs to use the notification as well to recieve notification message.

* "gamifying" food education: The team can build this after the team finishes all activities features like posting, commenting,  likes, notification, etc. so that the team can decide with our partner how the reward system would be more encouraging for students to participate. The reward system to "gamifying" food education can only be reasonable and well designed after partner has a better idea of what the web app can do and can use the rewarding system to guide students to learn food knowledge. However, the time interval between deliverable 2 and deliverable 3 is quite short, and the team thinks notification feature is more urgent than this feature.



## Meeting Highlights

Going into the next iteration, our main insights are:

* Angular is a very powerful framework for frontend. To incorporate our front end into Angular can better organize the front end css, HTML, and type script by component so that the code is better organized.
* The feature that is needed to be implemented in this iteration is the notification feature and the activity feature. These features can help users better communicate with each other when a comment is made, the user can get noticed as soon as possible. It conserves the passion to communicate and share knowledge.

