const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const CandiSchema = new Schema({
  FirstName: { type: String, required: true, maxLength: 100 },
  LastName:{type: String, required: true, maxLength: 100 },
  Mobile: { type: String , required:true },
  isRegistered: { type: Boolean ,required:true,default:false},
  DOB:{type:Date,required:true},

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
module.exports = mongoose.model("CandiSchema", CandiSchema);