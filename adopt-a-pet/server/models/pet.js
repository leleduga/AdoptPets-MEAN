let mongoose = require('mongoose');

mongoose.model('Pet', new mongoose.Schema({

  name:{type: String, required:true, minlength:3, maxlength:255},
  type:{type: String, required:true, minlength:3, maxlength:255},
  description:{type: String, required:true, minlength:3, maxlength:255},
  skills: {type: String, required:false, minlength:0, maxlength:255},
}))
