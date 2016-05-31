require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const bodyParser = require("body-parser")
const routes = require("./routes/index.js")
const morgan = require("morgan")
var favicon = require('serve-favicon');
var jade = require('jade');
https = require('https');
const fs = require('fs');

app.set("view engine", "jade");
app.use(express.static(__dirname + "/public"));
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({extended:true}));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.use(methodOverride("_method"));


app.use('/kyle', routes.kyle);


app.get('/', function(req,res){
  res.redirect('/kyle');
})

var port = process.env.PORT;

https.createServer({
      key: fs.readFileSync('./key.pem'),
      cert: fs.readFileSync('./server.crt')
}, app).listen(port);
console.log(`listening on port ${port}`)
