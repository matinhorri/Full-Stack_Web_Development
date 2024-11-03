User Story: Please Implement the yellow commands in sequence
	       Help, if you have an error
1-	Please run the webserver with the below command in the terminal: 
node server.js
2-	Open the browser and search the below command, in order to work with the todo list, you need to add a task into the table: 
localhost:3008/add
3-	Please enter the name of the task, and other fields aren’t required but it would be like the real world todo lists if we have options to add date, Priority and description. 
Title: Task 1 
Date: 12/28/2022
Priority: High
Description: Test Purpose
Click on add
4-	Now you redirected to your Todo list
5-	Please Click on the add a new task +, and 3 more tasks: 
Title: Task 2 
Date: 12/28/2022
Priority: Low
Description: Test Purpose
Click on add
Note: when use choose the priority, my application will give feedback to user which is helpful to choose the right Priority for the task. So, with this option my app will help user to not choose wrong option.
6-	Now you redirected to your To-do list
7-	Please Click on the add a new task +, and 2 more tasks: 
Title: Task 3 
Date: 12/28/2022
Priority: Low
Description: Test Purpose
Click on add
8-	Now you redirected to your Todo list
9-	Please Click on the add a new task +, and 1 more task1: 
Title: Task 4 
Date: 12/28/2022
Priority: Low
Description: Test Purpose
Click on add
10-	Now you can see your to-do list. Also, if you would like to view your todo list directly, you can: 
1-	Please run the webserver with the below command in the terminal: 
      node server.js
2-	Open the browser and search the below command, to view your todo list. 
     localhost:3008/todo

Note: you should create a table called the todo in your mysql database(you can find the related commands in the schema.sql line 1 to 9)
11-	 User finishes the first task, and want to change the status of the task to complete
(Note: you’re in the: localhost:3008/todo page) 
Click on the: change the status of the task to done(you just redirected to the : localhost:3008/changedone page)
Then you can see all the tasks that you have incomplete yet. So just choose one of them and enter the name of the task into the title box:
 Task 4
 then click on done and you’ll redirect to the todo list and as you can see the status changed to done from not_done .
12-	User finishes the second task, and want to change the status of the task to complete
(Note: you’re in the: localhost:3008/todo page) 
Click on the: change the status of the task to done(you just redirected to the : localhost:3008/changedone page)
Then you can see all the tasks that you have incomplete yet. So just choose one of them and enter the name of the task into the title box:
 Task 3
 then click on done and you’ll redirect to the todo list and as you can see the status changed to done from not_done .
13-	Now at the of the main page (the todo: localhost:3008/todo) you have to options to filter the completed and not completed task, please click on the completed to see completed and click on the not completed to see not finished tasks. 
   Note: the page will not reload as the instruction asked us for this feature. 
     
14-	User want to change the first task to not finished yet status, and want to change the status of the task to not completed
(Note: you’re in the: localhost:3008/todo page) 
Click on the: change the status of the task to not done(you just redirected to the : localhost:3008/changeundone page)
Then you can see all the tasks that you have. So just choose one of them and enter the name of the task into the title box:
 Task 4
 then click on not done and you’ll redirect to the todo list and as you can see the status changed to not_done from done .
15-	User finishes the second task, and want to change the status of the task to complete
(Note: you’re in the: localhost:3008/todo page) 
Click on the: change the status of the task to not done(you just redirected to the : localhost:3008/changeundone page)
Then you can see all the tasks that you have. So just choose one of them and enter the name of the task into the title box:
 Task 3
 then click on not done and you’ll redirect to the todo list and as you can see the status changed to not_done from done.
16-	In order to delete a task just click on “Delete task”, then choose the task that you want to delete and enter the title into the box and click on Delete. 
Task_4, then click on the delete. 
Not you redirected to the Todo list and as you can see the Task_4 is removed. 







Purpose of the left side: 
In order to have better and complete website, I added the About Me page to my project to have better and complete project. Also you can click on the Widget to see some important information like the weather, and time end of the semester. You can check my professors and TA in the current semester if you click on the Contacts. Also Click on the Contact me if you want to talk with me. Also, you can login to your account and it’ll redirect you to your todo list, if you have a list. 

Purpose of the Post functions: 

In order to have a better and complete website I just used the post function for each feature like the add, delete, change status. If you download the “todo” list app on your iphone, you can see if you want to add a new task, it’ll open a new page. 

