const express = require('express');
const router = express.Router();

router.get("/", (req, res) =>{
  res.render("home.pug");
})

router.get("/projects", (req, res) =>{
  res.render("projects.pug");
})

router.get("/resume", (req, res) => {
  res.render("resume.pug")
})

router.get("/download", function(req, res){
  var file = 'public/upload/Kyle Peacock Resume.pdf';
  res.download(file);
})

router.get("*", (req,res) =>{
  res.send("I dunno whachoo want");
})

module.exports = router;
