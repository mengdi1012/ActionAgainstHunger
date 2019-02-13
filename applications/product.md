# YOUR PRODUCT/TEAM NAME

 > _Note:_ This document is meant to evolve throughout the planning phase of your project.    
 > That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section).
 > Most importantly, it is a reflection of all the planning you work you've done in the first iteration. 

#### Q1: What are you planning to build?

A1: We are building an social platform supports both web and android for all members in Action Against Hunger community to share knowledge, perform activities.
  - It is not a new project. The previous team developed an android app with basic functions like 
    login, view/edit posts etc. However from our partner’s feedback, They did not use the app because the user’s signup function does not meet their security requirements. Another reason prevent them from using is the posting experiences. As we can imagine, making a long posting on phone is such painful, let alone a good layout. Based on this, we come up with a idea to create a web version for it.  The web version could be accessed from computers, which makes long typing pretty easy with a real keyboard. In addition, It can improve the efficiency for admin to manage all the users, posts and stuff on a  big screen with the help of mouse and keyboard rather than typing on phone. Besides, by applying responsive design, our product could provide fairly good user experiences for all devices. 
  - For security reasons, it suppose to be a closed community, which means no unverified people 
    could get in. We will not have sign up option on the webpage,  but a login entrance. Every account should be created by administration. Besides, for anonymous purpose for students, we also provide some “one step” method for teacher to create a pool of accounts without students’ personal information. 
  - For facilitating more communications between different schools at different locations,
    instead of just having a one-way post, we would like to add more interactive features to it, for example like or dislike some posts, add it to favourite, notification for comment etc.  We also have Q&A section where students could ask questions, teachers and professionals could make answers.
  - To increase student interest and retention, we have a feature called activity. Teachers could 
    create an activity and invite all students or other schools to participate. For example, when the activity is about growing some plant in their own school, students from different schools could post regular pictures to track progress and make discussions.



#### Q2: Who are your target users?
A2:
School-aged French/English speaking students (6-19 years old) who are participating in Generation Nutrition program from 30 schools across Canada. They are eager to learn, share nutritious food knowledge, experience and want interactive learning with professionals.

And their teachers who want to have a trustworthy and secure social media to help students interact with people in different places and use the app to assist their teaching on food education. 

Professionals, selected by the organization, from different food sectors (dietitians, cooks, gardeners, farmers, nurses, etc.) who could answer questions and write posts to share their knowledge in their professional areas to the young people from every places across the Country or even the world  and make a contribution to food education.


#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

A3:  
  - Our project has four types of users: students, teachers, professional and Administrator. For 
    teachers and professionals, this application allows them to post Generation Nutrition related articles for not only their students but also for students from other school who are interested in the same topic. This functionality will help teachers achieve their goal of education and also help professional impart the Nutrition knowledges to the students. 
  - In addition, teachers could start an activity and invite several other to schools to 
    participate in it. Through such activity, their students get a good chance to have a better understanding about how locations can affect plants growing and food issues.This functionality will achieve the goal of connecting the all the school together.
  - For student users, the application provides a security environment for them to social and learn
    since their identity is confidential and all information on it are trustworthy. We let them have more fun during studying by providing them an achievement system. Whenever they get some questions even when they are not in school, they can still post it on the application and get waiting for professionals to answer.
  - There are some similar applications exist in another form. Our project allowed user to post 
    article, question, activities. Piazza is mainly for class level discussion, the participants just one course students, but our platform is designed for the whole community containing dozens of schools and professionals from different food sections. We provide a platform which allows students from different schools can connect together. This kind of environment is exactly match our users desire. Thus our project is more suitable to the target users when compared to the Piazza.
  - Reddit may have similar functionality to our project, but we allowed user to have achievement 
    by answering questions, posting question or participating the activities. Reddit does not have these functionalities and through this approach, we can encourage student users to gain more knowledges by themself. Eventually, our project will be more suitable to the target users when compared to the reddit.


#### Q4: How will you build it?
What is the technology stack? Specify any and all languages, frameworks, libraries, PaaS(Platform as a service) products or tools. 

- Web App:
  Front-End and Back-End :HTML5, CSS3, jQuery , HTTP, NodeJs
  Database: MongoDB(free) or AWS DynamoDB, AWS S3
  Deployment: Heroku(free) or AWS Lambda
  Automation Testing: Java, Selenium, TestNG
- Android App:
  We are building this application based on an existing prototype completed by team 10,
  mainly use Java, AWS DynamoDB and same automation testing tools as above.

How will you deploy the application?

We think of two options to deploy it:
- Web App:
  1. Deploy it on Heroku. 
    Advantages: totally free for short term, extremely easy to start
    Disadvantages: only free for low volume, even more expensive than aws when it 
                 actually put into use  
  2. Deploy it on AWS Lambda
    Advantages: easy to set up connection with aws database
              charge little during development
    Disadvantages: not free
We will discuss it with our partner for final decision.

- Android App:
  We will be developing this application on Github. Anyone with access may clone it to the local device and deploy it on a Android phone through Android Studio.

Describe the architecture - what are the high level components or patterns you will use? Diagrams are useful here.
- Web App:
  We will use Model-View-Controller architecture
  There are two sides, client side and server side(including database). Client side are responsible to display the content, handle users' operation and send http request to the server. The server side are responsible to handle the http request return proper pages or perform CRUD operation on database.

- Android App:
  Similar MVC architecture for Java Application

Will you be using third party applications or APIs? If so, what are they?

  We will be using third party application when there is necessity. One possibility is using third party front-end templates to professionalize user interfaces to make the application more user-friendly.
  We also might use Google Translate api to translate between english posts and french posts.

What is your testing strategy?

  In order to ensure the quality and stability of our application, we will be using both manual testing and automation testing throughout the development process.
  For manual testing, we build test plan as we develop new features, which will contain multiple test scenarios and expected behaviours for each feature. After new features are implemented, we go through all the relevant test cases manually and record the test results. On regular basis, we will do regression test on previous features to ensure that they are still functioning well as we make progress.
  For automation testing, we will be using selenium for Java and testNG to run regression tests whenever new functionalities been added. 

----

### Highlights

Team process Decision:
  - We take scrum as our main methodology since it can help us make fast response to changes when 
    our client could not provide us a clear idea about the product and expectations.
  - We set the spring period to be 1 week instead of other longer choices, because we have a tight 
    schedule and we want get more frequent feedback from team members/Ta/Client.
  - Our spring start in every Monday and we have two meetings in each week. Planning Meeting is on
    every Tuesday since we might get some new ideas from Monday’s lecture and make a plan for this new sprint. For review and retrospective meetings, we decide to have it on Saturday. In that case, we can have enough time to review or catch up the difficulties before the start of the next spring.
  - We tried to have a daily meeting about 15 minutes everyday, but we realised that is hard to
    gather all 7 team members because of different timetables. Instead of having a fixed daily meetings, we decide to use a Facebook group chat. During anytime of the day, everyone is welcome to give a short update about their work, questions or impediment. 

Product Decision:
  - When we first saw our project handout, we did a brainstorm and come up with a lot of creative
    ideas and features. For example: Adding a map feature for showing participating school locations for an activity. To increase students’ interest and retention, we come up with the rewarding feature, students could get some virtual badges after accomplishing some goals like: viewing dozens of posts, participate into an activity etc. Besides, we will set a quiz for fun section to encourage students to test what they learned and get reward based on grades. In addition, we also plan to add more functionalities to the post like notification of new posts, popularity and like/dislike buttons etc.
    However after meeting with our client, we found we go to the wrong way. We have to understand our clients’ current issues first, then come up with solutions to the issues and last think about which features can be added for it. 
  - Due to the security reason, we decide to build the login with restriction for each type of 
    user  as the most high priority task.
  - When we tried to play around with the android app from the previous team, we discovered that
    it is not convenient to posting a long article in a mobile phone. In addition, teachers need to create/delete/edit accounts for their students. It will be painful to operate these operations on phone. Therefore instead of directly adding more feature to the android app,  we want to design a web application in parallel. In that case, user can decide whether using web or mobile as their wish. Our partner agrees with this idea,  she says “From a user's perspective (teacher), they'll probably be using a desktop version rather than an app.” 


