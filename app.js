const express = require("express");
const bodyParser= require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(("public")));
app.use(express.urlencoded({ extended: true }))
book=[]
authorname=[]
genre=[]
app.get("/",(req,res)=>{
    res.render("index");
})
app.post("/user",(req,res)=>{
    if(req.body.username==="nitin" && req.body.password==="nitin")
    res.render("profile");
    else
    res.redirect("/");
})
app.post("/allbooks",(req,res)=>{
    book.push(req.body.bookname);
    authorname.push(req.body.authorname);
    genre.push(req.body.genre);
    res.redirect("/user");
})
app.get("/user",(req,res)=>{
    res.render("profile");
})
app.get("/allbooks",(req,res)=>{
    res.render("allbooks",{bookname:book,authorname:authorname,genre:genre});
})
app.listen(3000,(err)=>{
if(!err)
console.log("server started.......");
})