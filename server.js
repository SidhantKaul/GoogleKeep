require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const { Schema } = mongoose;
const path = require("path");
let port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(express.static(path.join(__dirname, "/client/build")));
mongoose.connect(""+process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true});
const notesSchema = new Schema({
  title:String,
  content:String
});
const Note = mongoose.model("Note",notesSchema);
app.post("/addNotes",function(req,res){
  console.log(req.body);
  const note = new Note({
    title:req.body.title,
    content:req.body.content
  });
  note.save(function(err) {
    if(!err)
    res.send("Success");
  })
});
// to get notes
app.get("/notes", function(req,res){
  Note.find(function(err,result){
    if(err)
    console.log(err);
    else {
      res.send(result);
    }
  });
});
// to get note that has to be deleted
app.get("/del/:id",function(req,res){
  const id = req.params.id;
  Note.findOneAndDelete({_id:id},function(err,result){
    if(err)
    console.log(err);
    else {
      res.send("Success");
    }
  });
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

if (port == null || port == "") {
  port = 9000;
}
app.listen(port,function() {
  console.log("Server has Started");
});
