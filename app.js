var port = 80,
    express = require('express'),
    app = express(),
    fs = require('fs')
const path = require("path");
const favicon = require('serve-favicon');


app.set('view engine','jade');
app.use(express.static(__dirname + "/public"));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.get('/', function(req,res){
  res.render('index');
})
app.get('/projects', function(req,res){
  res.render('projects');
})
app.get('/resume', function(req,res){
  res.render('resume');
})
app.get('/download', function(req,res){
  var file = 'public/upload/Kyle Peacock.pdf';
  res.download(file);
})


var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};


// Listen on port 3000, IP defaults to 127.0.0.1
app.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
