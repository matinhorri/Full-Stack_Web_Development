create table todo (
         title text not null,
	   date text,
         task_id int auto_increment,
         priority text,
         message text, 
         status text,
         primary Key(task_id)
   );

--add data command 

insert into todo (title, date, priority, message, status) values ("Task_1", "12/24/2022", "high", "Start my vacation!");
insert into todo (title, date, priority, message, status) values ("Task_2", "12/25/2022", "normal", "Start day_2 of my vacation!!");
insert into todo (title, date, priority, message, status) values ("Task_3", "12/26/2022", "low", "Start day_3 of my vacation!!");
--get data command

select * from todo;
-- host: "cse-mysql-classes-10.cse.umn.edu",

--In order to filter the category: 
select "priority" like "1";
select "priority" like "2";
select "priority" like "3";


select * from todo WHERE status = 'not_done';
select * from todo WHERE status = 'not_done';
select * from todo WHERE status = 'not_done';


--  In order to update the table and change the undone and the done status we can use it

Update todo set status = 'done' where title = 'Task_1';

Update todo set status = 'not_done' where title = 'Task_1';
