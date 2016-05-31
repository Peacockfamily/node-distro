const express = require('express');
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const bodyParser = require("body-parser")
const routes = require("./routes/index.js")
const morgan = require("morgan")

app.set("view engine", "jade");
app.use(express.static(__dirname + "/public"));
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({extended:true}));

app.use(methodOverride("_method"));

app.use('/kyle', routes.kyle);
app.use('/', express.static(__dirname + '/public/static'));

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`Server is listening on port ${port}`)
})
