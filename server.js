const express = require("express");
const session = require('express-session');
const pug = require("pug");
const app = express();
const PORT = 3008
var db = require("./db")
var number_count= 0;

app.use("/resources", express.static("resources"));
app.use(express.urlencoded({extended:true})); 
app.use(session({secret:"oauhsdlmfnaliustydfialjbkwegf"}))
    
app.set("views", "templates");
app.set("view engine", "pug");
// routes
app.get("/myAboutMe", (req, res)=>{
    res.render("myAboutMe.pug")
});

app.get("/myContacts", (req, res)=>{
    res.render("myContacts.pug")
});

app.get("/contactMe", (req, res)=>{
    res.render("contactMe.pug")
});

app.get("/myWidgets", (req, res)=>{
    res.render("myWidgets.pug")
});

app.get("/login", (req, res)=>{
    res.render("login.pug", {username:req.session.username})
});

app.post("/login", (req, res)=>{
    res.redirect("/todo")
});

app.get("/api/changeundone", async(req, res) =>{
    tasks = await db.getlist();
    res.json({tasks: tasks});
}) 

app.get("/changeundone", async(req, res) =>{
    let tasks = await db.getlist();
    res.render("changeundone.pug", {tasks: tasks});
});

app.post("/changeundone", async(req, res)=>{
    const newtitl = req.body.title;
    await db.changenotdone(newtitl);
    let tasks = await db.getlist()
    res.render("todo.pug", {tasks: tasks})
});

// app.post("/api/click/", async function(req, res){
//     // console.log("111");
//     number_count += 1;
//     res.json({tasks: tasks});
// })
// app.get("/api/click/", async function(req, res){
//     //number_count += 1;
//     // console.log("222");
//     res.json({tasks: tasks});
// })
app.get("/api/changedone", async(req, res) =>{
    tasks = await db.getlist();
    res.json({tasks: tasks});
}) 

app.get("/changedone", async(req, res) =>{
    let tasks = await db.getlist();
    res.render("changedone.pug", {tasks: tasks});
});

app.post("/changedone", async(req, res)=>{
    const newtitl = req.body.title;
    await db.changedone(newtitl);
    let tasks = await db.getlist()
    res.render("todo.pug", {tasks: tasks})
});

app.get("/todo", async(req, res)=>{
    tasks = await db.getlist();
    res.render("todo.pug", {tasks: tasks})
});

app.get("/done", async(req, res)=>{
    tasks = await db.done();
    res.render("todo.pug", {tasks: tasks})
});

app.get("/notdone", async(req, res)=>{
    tasks = await db.notdone();
    res.render("todo.pug", {tasks: tasks})
});


app.get("/api/delete", async(req, res) =>{
    tasks = await db.getlist();
    res.json({tasks: tasks});
}) 

app.get("/delete", async(req, res) =>{
    let tasks = await db.getlist();
    res.render("delete.pug", {tasks: tasks});
});

app.post("/delete", async(req, res)=>{
    const newtitl = req.body.title;
    await db.deletetask(newtitl);
    let tasks = await db.getlist()
    res.render("todo.pug", {tasks: tasks})
});


app.get("/api/add", async(req, res) =>{
    tasks = await db.getlist();
    res.json({tasks: tasks});
})

app.get("/add", async(req, res) =>{
    let tasks = await db.getlist();
    res.render("add.pug", {tasks: tasks});
});

app.post("/add", async(req, res) =>{
    const newtitle = req.body.title;
    const newdate = req.body.date;
    const newpriority = req.body.priority;
    const newmessage = req.body.message;
    await db.newtask(newtitle, newdate, newpriority, newmessage)
    let tasks = await db.getlist()
    res.render("todo.pug", {tasks: tasks});
    //res.render("logs.pug", {contacts: contacts});
})

app.listen(PORT, function() {
    console.log(`Listening on http://localhost:${PORT}`);
 });