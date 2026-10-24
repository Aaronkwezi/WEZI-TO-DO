# WEZI-TO-DO
- view page: https://aaronkwezi.github.io/WEZI-TO-DO/
## INTRO TO WEZI-TO-DO
-   In our day to day activities we get caught up in many activities to perform and we lose track of our schedules.
    But with  this browser based application "WEZI-TO-DO" you will be able to organize your tasks for the day in an orderly fashion and have your days inorder with out having to cram your tight schedule.
 
## How to use
-  This application works with a few simple and easy steps.
    - When you open the application you are greeted with a landing page and a side bar.
    - In the side bar click on "New Task" and it will produce an input form to put your data.
    - In the event that you have put your data. Hit submit to place your task in the default task project called   "Inbox"
    - If you are in need to create a project of your one "WEZI-TO-DO" has got you covered as you can add your own
    project with its specified task using " Add Projects " in the sidebar. 
    - To look at the tasks for your current day with out checking through every project , you can go ahead to your
    task navigation bar with a today's option alongside with other options such as the Upcoming tasks, OverDue tasks and Completed tasks.
    - Worried that you made a mistake in you task or project description? That is also catered for as there are "Delete" and "edit" buttons to fix up errors or remove unwanted tasks.

## TECHNICAL SETUP.
- In the development of this browser application I used HTML,CSS and javascript programming language.
- It involved various features of development such as local storage , use of webpack bundling and datefns module.
- The data is saved in the current browser's localStorage, rather than synced across devices.
- The webpack bundles the js files, html files and css file.

### CODE ORGANISATION
- `task.js`: Creates the tasks and provides functions for editing tasks plus working on the task completion status.
- `project.js`: Creates and Manages the projects and restores their data from the local storage.
- `storage.js`: is for loading and saving data using localStorage.
- `date.js`: is used for determining whether tasks are today, upcoming or overdue.
- `dom.js`: It is used for constructing the interface that the user will interact with as it manages eventlisteners.
- `index.js`: It is used to initialize the task and project managers and renders the app. 
- `style.css`: It is used to add the styles and colors to the user interface.

### running on a local machine
- Install Node.js and npm, then run:

npm install
npm run start

Open the local URL printed in terminal.
