const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const VoterSchema = new Schema({
  Aadhar: { type: String, required: true, maxLength: 100 },
  FirstName: { type: String, required: true, maxLength: 100 },
  LastName:{type: String, required: true, maxLength: 100 },
  Mobile: { type: String , required:true },
  isRegistered: { type: Boolean ,required:true,default:false},
  DOB:{type:Date,required:true},
  Address:{type: String, required: true, maxLength: 100 },
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


// VoterSchema.virtual("name").get(function () {
  
//   let fullname = "";
//   if (this.first_name && this.family_name) {
//     fullname = `${this.family_name}, ${this.first_name}`;
//   }
//   if (!this.first_name || !this.family_name) {
//     fullname = "";
//   }
//   return fullname;
// });


// VoterSchema.virtual("url").get(function () {

//   return `/catalog/author/${this._id}`;
// });

// Export model
module.exports = mongoose.model("VoterSchema", VoterSchema);