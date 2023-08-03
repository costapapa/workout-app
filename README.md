# workout-app

Description:

In Unit 2 of the Software immersive Bootcamp course we had learnt how to build a full-stack application. We learnt how to use Databases, Express, Routes, Controllers, Modules etc.The goal of our project was to create a fully functioning Application, it was essential to use CRUD (Create, Read, Update & Delete).

Deployment Link:
https://workoutlogger.fly.dev/

Timeframe & Working Team:
This was a solo project, we were given just under 7 days to build our app. This included planning, coding the app and deploying it.

Technologies Used:
HTML, CSS, Javascript, MongoDB, Mongoose, Node, Express, Visual Studio Code, Trello (Planning), Excalidraw (Planning)

Brief:
- Have at least 2 data entities (data resources) in addition to the `User` Model
- Use OAuth authentication
- Implement basic **authorization** that restricts access to features that need a logged in user in order to work
- Have **full-CRUD data operations** somewhere within the app's features
- Consistent and polished user interface
- Deployed online

Planning:
I firstly began by creating a WireFrame on how I wanted my app to look like. After this was complete I created the ERD for the models.

<img width="302" alt="Screenshot 2023-08-03 at 13 24 25" src="https://github.com/costapapa/workout-app/assets/130251744/6d2cc134-1a48-42ee-ba62-1b5c466cf518">

The below changed during the app build:

<img width="342" alt="Screenshot 2023-08-03 at 13 30 30" src="https://github.com/costapapa/workout-app/assets/130251744/94ecac10-c077-45da-9e94-9dd4d5d00e08">
<img width="486" alt="Screenshot 2023-08-03 at 13 30 58" src="https://github.com/costapapa/workout-app/assets/130251744/c1d5a139-c10a-46eb-8e68-dfadbfe52e34">

MVPs:
Create a workout planner app which keeps a list of workouts and dates:
Must have a log in
Able to create new workouts
List all workouts
Each workout will have User input to add - Movement Name, Amount of Sets, Amount of reps, Weight(kg’s)
Delete Workouts

Stretch Goals:
User Can login with email and password
User can view personal bests
User can select Kilograms(Kg’s) or Pounds(lb’s)

Code process:

The first step to begin the build for my app was to set up Express, Connect my Mongoose Database and install any middleware required. After this I checked that my Localhost was enabled and working as normal.

<img width="367" alt="Screenshot 2023-08-03 at 13 35 09" src="https://github.com/costapapa/workout-app/assets/130251744/b3e8c0a7-f844-4bfd-b396-3262972a0723">

Next step, was to setup my routes and app.use in my main Server.js

<img width="622" alt="Screenshot 2023-08-03 at 13 35 50" src="https://github.com/costapapa/workout-app/assets/130251744/ca71630d-7b79-461c-b9c0-13ae009bc67d">

<img width="548" alt="Screenshot 2023-08-03 at 13 36 15" src="https://github.com/costapapa/workout-app/assets/130251744/da31f4b3-cc41-403f-8859-fbd1f01b2630">

Before beginning, set up my Controllers, Models, Views and Ejs files. I wanted to ensure my Google Oauth was implemented into my app. I followed the steps below to do this:
Registered my App with Google's Oauth Server
Defined the ‘User’ Model
Installed my Passport.JS in my Config module:

<img width="410" alt="Screenshot 2023-08-03 at 13 39 25" src="https://github.com/costapapa/workout-app/assets/130251744/d0db50c9-526e-466a-b8f9-189a4189f138">

Install a passport Strategy for Oath
Configure Passport
DEfine routes for authentication 
Add Login/Logout UI to my ejs file
Code the User Stories
Implement Authorisation

<img width="616" alt="Screenshot 2023-08-03 at 13 40 03" src="https://github.com/costapapa/workout-app/assets/130251744/3413fd7f-5df0-4663-8a7a-b7e89ab6d0c0">

Once the Google Oauth was working I then focused on adding my Schemas:
The original Schema did not look like the screenshot below as after I implemented an embedded relationship to it, this would help adds add each movement to the main schema:

<img width="348" alt="Screenshot 2023-08-03 at 13 41 06" src="https://github.com/costapapa/workout-app/assets/130251744/9ba956bc-67a7-4ae4-ae4a-bb378a6ece5e">

Once the schema was set up I began adding the Functionality to my app.

Firstly I added ‘add a workout’ href to my home screen so I could land on the Workouts/Index.ejs and begin the functionality for the create option:

<img width="406" alt="Screenshot 2023-08-03 at 13 42 04" src="https://github.com/costapapa/workout-app/assets/130251744/cb4cfb82-84fc-4dde-8a31-febd192fbfce">

Once complete, i wanted the user to fill in a form to create or show the workout to show on the /workouts page. Each workout would have its own specific /:id. 

To do this I followed the following steps, similar steps were followed to also Complete the Edit and Delete functionality. 

Firstly, identify the Routes: 

<img width="614" alt="Screenshot 2023-08-03 at 13 42 46" src="https://github.com/costapapa/workout-app/assets/130251744/b7ef4a19-a9e2-49eb-9b9f-a60becaf13a3">

<img width="586" alt="Screenshot 2023-08-03 at 13 43 00" src="https://github.com/costapapa/workout-app/assets/130251744/d2b9872d-f649-4638-98c9-b062ceb7abac">

<img width="606" alt="Screenshot 2023-08-03 at 13 43 31" src="https://github.com/costapapa/workout-app/assets/130251744/83dd2ed4-0769-44b2-8fe6-0e9759ffc34c">

Once the routes had been defined I added them to my UI. Screenshot below is at the end of the finished project however at the beginning it looked similar and not as populated.

<img width="607" alt="Screenshot 2023-08-03 at 13 44 12" src="https://github.com/costapapa/workout-app/assets/130251744/88f6c713-37b2-49e5-8742-8624d4d0c2b3">

When the create was added to the UI, I needed to Define the route. Which is in the href tag above.

The last step was to Code the controller action. Please see below:

<img width="605" alt="Screenshot 2023-08-03 at 13 44 51" src="https://github.com/costapapa/workout-app/assets/130251744/a257539a-0366-48af-82f0-d76580fa41fb">

Once all the above was complete my app looked similar to the below:

workouts/new
<img width="177" alt="Screenshot 2023-08-03 at 13 46 07" src="https://github.com/costapapa/workout-app/assets/130251744/4733bc6e-fd02-49b0-ba29-a23dcc7913b7">

/workouts/:id
<img width="292" alt="Screenshot 2023-08-03 at 13 46 36" src="https://github.com/costapapa/workout-app/assets/130251744/dd4ea4dc-c1e3-48d0-9076-9c29d84c81a1">

I then added a href, which you could click on to show you each workouts information. Like the above.

<img width="330" alt="Screenshot 2023-08-03 at 13 47 01" src="https://github.com/costapapa/workout-app/assets/130251744/9eac43e9-5985-4e35-9a18-66139a25b791">

Now that I was able to create and show each workout, I realised that I wanted my user to Edit the Title and Date of each workout. 

To do this I split the main Schema into two, the movement information eg. Movement, Sets, Reps, Weight and Notes were split into an embedded relationship. This gave the user access to add each of the above points on the page. As ultimately if the user was logging all their workouts on the same date the workouts page would fill up pretty quickly. 

So I then again, using the steps mentioned above followed a similar method so the user could create workOut Info. As the workoutInfo relationship was now a subdocument I had to use different ways to show this on each page. 

<img width="592" alt="Screenshot 2023-08-03 at 13 48 47" src="https://github.com/costapapa/workout-app/assets/130251744/cb629074-fb64-40c8-81a7-259fca8d99c7">

<img width="576" alt="Screenshot 2023-08-03 at 13 49 38" src="https://github.com/costapapa/workout-app/assets/130251744/b3f9cbe2-040d-480c-8dbd-da270858dc2e">

This was the show page in the ejs file, which would post the movements to each workout.

<img width="460" alt="Screenshot 2023-08-03 at 13 50 03" src="https://github.com/costapapa/workout-app/assets/130251744/58b316a0-5bba-4508-9ad0-7f0e399b7456">

My focus then turned to adding an edit, delete and updating functionality to my app. 

Below are the routes and controllers for these:

Delete:
<img width="613" alt="Screenshot 2023-08-03 at 13 50 47" src="https://github.com/costapapa/workout-app/assets/130251744/13a61969-95aa-4bcb-b3d6-5b434d420cfc">

Edit:
<img width="607" alt="Screenshot 2023-08-03 at 13 51 21" src="https://github.com/costapapa/workout-app/assets/130251744/105b726f-9238-4645-ad67-083c502e69c6">

Update:
<img width="525" alt="Screenshot 2023-08-03 at 13 51 53" src="https://github.com/costapapa/workout-app/assets/130251744/190546f4-6916-455c-912a-64e0e1cb42b6">

<img width="558" alt="Screenshot 2023-08-03 at 13 52 06" src="https://github.com/costapapa/workout-app/assets/130251744/ba07b629-a99b-476d-93a6-7244f22ae86d">

<img width="411" alt="Screenshot 2023-08-03 at 13 52 24" src="https://github.com/costapapa/workout-app/assets/130251744/a45ac0ee-ca07-42a8-b79a-617dd477bf9e">

The main functionality of my app was not in working order. However I wanted to add a delete button to the workoutInfo. As this was a subdocument of the main schema it was not as easy as straight forward as creating the delete functionality for the main schema. 
Please see the challenges section below.

Next step was to add some styling to my app as currently it looked really basic. 

Please see below screenshots. 

<img width="347" alt="Screenshot 2023-08-03 at 13 52 55" src="https://github.com/costapapa/workout-app/assets/130251744/ac0df8bd-f67e-4764-85d4-7cdd2b66229e">
<img width="487" alt="Screenshot 2023-08-03 at 13 53 12" src="https://github.com/costapapa/workout-app/assets/130251744/153a7514-b4c6-47c2-a2ca-041d166ee4f9">
<img width="537" alt="Screenshot 2023-08-03 at 13 53 26" src="https://github.com/costapapa/workout-app/assets/130251744/aebb0713-31ce-43ca-b274-ab22fc964b93">
<img width="431" alt="Screenshot 2023-08-03 at 13 53 42" src="https://github.com/costapapa/workout-app/assets/130251744/57edc1ec-8107-488c-8fb6-4816542a5357">

Once the styling was complete I had half a day until the submission date, so I decided to add a modal to my home screen.

This was just simply adding some Query Selectors, Functions and Event Listeners:

<img width="592" alt="Screenshot 2023-08-03 at 13 54 20" src="https://github.com/costapapa/workout-app/assets/130251744/28dc36d4-d26b-40da-a917-743321be6b5f">

<img width="451" alt="Screenshot 2023-08-03 at 13 54 42" src="https://github.com/costapapa/workout-app/assets/130251744/5962ae46-e397-4ff9-bba8-7667b1e85227">

<img width="567" alt="Screenshot 2023-08-03 at 13 55 05" src="https://github.com/costapapa/workout-app/assets/130251744/d684d88e-f258-420f-b8f8-39de7f23347e">

Finally, I added some control measures for what an ‘Owner’ can see when logged in. 

I then added these to each route:

<img width="618" alt="Screenshot 2023-08-03 at 13 55 33" src="https://github.com/costapapa/workout-app/assets/130251744/b5e401db-4159-4886-91fc-cec39710351b">

<img width="613" alt="Screenshot 2023-08-03 at 13 55 58" src="https://github.com/costapapa/workout-app/assets/130251744/9c117b16-ef27-468e-9188-3db02612e63e">

This meant that only the owner of the workout could edit or delete.

Challenges:
The main challenge I had was working out how to delete Created embedded relationships. As it was an embedded relationship in my Main Schema i could not delete it in the same way you could delete the main schema. After checking the mongoose documentation I realised I had to use the deleteOne() method. Function below:

<img width="403" alt="Screenshot 2023-08-03 at 13 56 45" src="https://github.com/costapapa/workout-app/assets/130251744/3df60c6f-2edc-4121-8407-f33f712ecebd">


Another challenge was implementing the styling, if i was to do this again. I would take a different approach. Instead of adding the styling at the end of the project I would add it throughout the project. 

Wins:
I was proud of myself for creating a fully functioning Work-Out app that you can log your workouts on. Strong sections of code were the Create, Show, Update, Edit functionality. 

I am happy with the way the styling finished, and I used a similar colour to my first project as I thought it looked polished.

Key Learnings:
I understood from creating this app that if I followed the same steps for every feature then this would ensure the app was built smoothly.

Steps of:
Identifying the route
Creating the UI
Defining the route
Code the controller
Respond to the Clients Http Request

I got a lot more confident throughout the project with creating my routes and controllers.

Future Improvements:
Responsive App - adding Media Queries so you can view better on Phones, and Various Screen Sizes. This would make the website alot more dynamic.
Adding the ability to Edit a Movement.

































