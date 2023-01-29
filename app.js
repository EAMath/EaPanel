//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// app.get("/" , function(req ,res){
//   res.sendFile(__dirname + "/msg.json");
// })

app.get("/BeyinBolumleriniOgrenelim", function(req, res){
  res.render("Brain");
});

app.get("/BeyinBolumleriTs", function(req, res){
  res.render("Brain2");
});

app.get("/BeyinBolumleriEs", function(req, res){
  res.render("Brain3");
});

app.get("/BeyinBoslukDoldurma", function(req, res){
  res.render("Brain4");
});

app.get("/", function(req, res){
  res.render("EaPanel");
});

app.get("/EaBiology", function(req, res){
  res.render("home");
});


let port = process.env.PORT;
if(port == null || port == ""){
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfuly");
});
