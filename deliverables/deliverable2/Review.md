

REVIEW
#Action against hunger

 > _Note:_ This document is meant to be written during (or shortly after) your review meeting, which should happen fairly close to the due date.      
 >      
 > _Suggestion:_ Have your review meeting a day or two before the due date. This way you will have some time to go over (and edit) this document, and all team members should have a chance to make their contribution.


## Iteration XX - Review & Retrospect

 * When: March 9th
 * Where: Online skype meeting
## Process - Reflection

(Optional) Short introduction

#### Decisions that turned out well

Since our project has a pretty tight timeline, most of our decisions are meant to maximum the efficiency of development in the limitation of time. So we made two following decisions:
1. Everytime we come up with any new functions or features, we will have a meeting to discuss it before starting coding blindly
With this decision, we can evaluate the value of each feature better because every team member could participate in and share their valuable thinkings. Also we could allocate the tasks more efficiently based on everyone’s strength and interest. For example, at the early of this iteration, we had a meeting talking about the backlog from D1. We sketch a general idea which components do we have, what database store, who are working a subteam for each specific feature etc. When we start actually developing features, we find out  the decision help us to develop faster and more consistent. For example, we decided together that the username in our application is unique in the database. When we start working on different page and function, we all keep this fact consistent so later when we need to find a user, we can use the username as the key to search it in the database. 
 
2. Log the meeting every time.
	We have a scrum master for each sprint, who not only needs to facilitate the meeting but also need to keep a record about the meeting. We use google doc to record each meetings’ content including any decision we made,  any problem we found and current progress, expected time to implement etc. By recording this stuff, we can have a better idea what’s going on in the team and also a reminder to push us making forward. It can also help us to keep a record of important decisions so we will not forget in the future.

#### Decisions that did not turn out as well as we hoped
1. All team members are required to attend in each meeting  
Before, we thought meeting in person is the most efficient way to have a meeting. So we try to have the meeting when everyone is available. However, because of different timetables, it is very difficult to achieve this due to the other lectures or exams. As a result, we have to postpone the meeting again and again causing a slow progress in development. 

2. Set internal deadline.   
The internal deadline that the team set is a day before the client deadline. However, the decision of setting the internal  too close to the release deadline is not a wise idea because the team faces more unexpected problems that we did not find out and discuss about at our regular meeting than we imagine. Since different team members manager the time differently it is very hard to push the internal deadline early if problems are discovered too late.

3. Split the team, half to build a web application and half to build mobile application
The team have weak background on building a mobile app compare to the web application. For the half of the team who try to work on mobile app, it tooks days to understand the previous team project and find out it is too hard to extend and continue. The progress of working on mobile will be much more longer than the web and the structure inside is also different. It is like we separate to two teams and working completement separate. Therefore as team, we decided to not continue doing mobile application but refactor it into a web application instead since web app is more convenience for users to make posts, manager users(admin), create student accounts(teacher). 



#### Planned changes
1. Instead of whole team meeting each time, we can also take sub-team meetings. So everyone can contact and meet with other team members who are working in the same feature in their own time. It is more efficient and practice. 
2. As the increase of codes, the conflict may also increase. For better resolving the potential bugs , we ask everyone to make comments or logs in the code and also make reasonable commit message when commit. For commit message, we decide to be consistent and uniform: start with feature/bug/document and followed by a brief explain of what you did. In that case if there a conflict, it will be easier for others to understand and decide how to solve the conflict without wasting time to ask the person who write.



## Product - Review

#### Goals and/or tasks that were met/completed:

1. Identify the 4 types of intended user and assign different permissions for them for better management and security of personal information:
Students: anonymous account,  Invited to login Make posts/View posts/Comment on posts. Can’t create account or change their username for safety reason.
Teachers: create a pool of users for students, Post educational information/news, view students’ name and their student id to better manage students. 
Professionals: login, publish posts and answer questions.
Admin:  Create accounts for teachers and food professionals, view all the users information etc.

2.  The interactions among users:
    - A strong focus on posting, texts and reading/commenting on others’ posts so that users can interact with others.
    
#### Goals and/or tasks that were planned but not met/completed:

Interaction between users:
- receive notification when users are tagged from the post so that user can easily follow the ongoing communication. For example, students attend activities for growing tomatoes , post their tomatoes’ photos, and receive feedback and comment from their peers.
 - Ask questions and invite nutrition experts to provide professional answers.
"gamifying" food education to increase student interest and retention
Providing challenges for students and and rewarding systems to let students gain the sense of achievement

The reason that these tasks were not met is because the team takes time to review the previous mobile app project from last semester, try to refactor the function, and incorporate it into our project. However, the project from last semester is not well documented, and it takes time to refactor the basic function from the scratch. The team overestimate what we can do in the previous iteration and learning backend for web and learning previous project’s code take a longer time than what we imagine. Our team decide to finish the features that are more prioritized and contribute as much as we can. These are the tasks that are not in first priority and they need to be builded based on the more priority features. 
Receiving notification can only be done after the team has built the post section and it is quite complex to build because it needs user to be able to interact with each other.
"gamifying" food education: The team can build this after the team finish all activities features like posting, commenting, likes, etc. so that the team can decide with our partner how the reward system would be more encouraging for students to participate. The reward system to "gamifying" food education can only be reasonable and well designed after partner has a better ideas of what the web app can do and can use the rewarding system to guide students to learn food knowledge. 

## Meeting Highlights

Going into the next iteration, our main insights are:
Decision that the team will only focus on web application:
Reasons:
The project is an extended project from last semester. The existing mobile application is not well documented, It is hard to add feature based on that. The team spends time on understanding the code but . It is hard to do both mobile app and web application together.
 Also our partner prefer a free application that can be used. It is hard to find a free database for mobile app if the data is large.  
Web application can be more convenience for user than mobile application. It is hard to manage the users (invite user, teachers create accounts for student), make post (especially for a long post) on mobile app. Therefore, web application is more urgent, important and helpful for our client to educate food science to students than building a mobile app.
