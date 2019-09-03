var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8000; 

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json({ type: "application/=+json"}));
app.use(bodyParser.raw({ type: 'application/vmd.custom-type'}));
app.use(bodyParser.text({ type: 'text/html'}));

app.listen (PORT, function(){
    console.log("You are now connected to PORT: "+ PORT);
});
