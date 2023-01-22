const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RegisteredDetails = new Schema({
  Aadhar: { type: String, required: true, maxLength: 100 },
  Name: { type: String, required: true, maxLength: 100 },
  Mobile: { type: String , required:true },
  DOB:{ type:Date ,default:Date.now ,required:true},
  Address:{ type:String },
  Email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
}





});


module.exports = mongoose.model("Registeredetails",RegisteredDetails);