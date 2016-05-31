require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const bodyParser = require("body-parser")
const routes = require("./routes/index.js")
const morgan = require("morgan")
var favicon = require('serve-favicon');
var pug = require('pug');


app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({extended:true}));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.use(methodOverride("_method"));


app.use('/kyle', routes.kyle);
app.use('/', express.static(__dirname + '/public/static'));

var port = process.env.PORT;

app.listen(port, function(){
  console.log(`Server is listening on port ${port}`)
})
