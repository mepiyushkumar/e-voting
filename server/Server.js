const path = require("path");
const express = require("express");
const app = express(); 
const cors=require("cors");
// Import the mongoose module
const mongoose = require("mongoose");
const Voter=require("./DB_models/Votermodel")

const chain=require("./Voting_block.js");


const candi=require("./DB_models/candimodel");
// Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1:27017/Details";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true },()=>{
  console.log("Connection to mongodb success")
},e=>{console.log(e)});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const client = require('twilio')('AC282dfa3b66fabd9fb2640c7e65cb0c2a', '52f1229d70596a415a7ad9bcd1631f4e');

const port = 5000

const { response } = require("express");

const bodyParser = require('body-parser');
const { Console } = require("console");
const { json } = require("body-parser");

app.use(

  cors({
    origin:"http://localhost:3000"
  })
)



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

let otp=0

async function hehe(obj){

  let data=JSON.parse(obj)
  delete data['chainaddress'];
  delete data['chainkey'];
let voter=await Voter.create(data)

await voter.save()
console.log(voter)



}

//hehe()
let result={
  winner:'',
  votes:0
};

app.post('/org',(req,res)=>{

  

  console.log(req.body)
  let obj=JSON.stringify(req.body)
  
  console.log(obj)
  
 
  chain.set_User(req.body.chainaddress,req.body.chainkey);

  if(req.body.mode==1){
    chain.start_voting();
  }
  else if(req.body.mode==2){
    chain.end_voting();
  }
  else if(req.body.mode==3){
    chain.get_Result().then(response=>JSON.parse(response)).then(data=>{
      console.log(data);
      result.winner=data.winner;
      result.votes=data.votes;


    });
    
    
    
  }
  else if(req.body.mode==4){
    chain.do_vote(req.body.choice);
  }
  
  res.json(result);





  })














app.post('/putINDB',(req,res)=>{

console.log(req.body)
let obj=JSON.stringify(req.body)

console.log(obj)

hehe(obj)
// chain.set_User(req.body.chainaddress,req.body.chainkey);

// chain.register_voter(req.body.FirstName);

//hehe(x.FirstName,x.LastName,x.Aadhar,x.Mobile,x.DOB,x.Address,x.Email)


})


app.post('/putcandi',async(req,res)=>{

  let obj=JSON.stringify(req.body)

  console.log(obj)

  let data=JSON.parse(obj)
 // delete data['chainaddress'];
 // delete data['chainkey'];
let Candi=await candi.create(data)

await Candi.save()
console.log(Candi)
res.redirect("http://localhost:3000/")

}
)

app.get('/get_items', (req, res) => {
	candi.find({}, (err, items) => {
		if (err) {
			console.log(err);
			res.status(500).send('An error occurred', err);
		}
		else {
			res.send({ items: items });
		}
	});
});








  








 

app.post('/veri' ,(req,res)=>{


console.log(otp)
console.log(req.body.OTPuser)
if(parseInt(req.body.OTPuser)===otp){
  console.log("success")
  let data={
    match_or_not:1
  }
  

  res.json(data)

  //chain.set_User(chainaddress,chainkey);

  
}
else{


  let data={
    match_or_not:0
  }
  res.json(data)
}



})










app.post('/auth', (req, response) => {
  
  console.log("i am pos")

  console.log(req.body)

 otp=Math.floor(Math.random() * 100000);
 console.log(otp)
   
 let data={
  OTP:otp,
  matchedOrNot:false
 } 

 
 
  


  var user=  Voter.findOne({Aadhar:req.body.Aadhar},(err,res)=>{
    if(err ){console.log(err)}
    else{
      console.log("result: "+res)
      if(res && req.body.Aadhar===res.Aadhar && req.body.Mobile===res.Mobile){
        
        
        console.log("matched")
        data.matchedOrNot=true

        response.json(data)
        console.log(data.matchedOrNot) 

          client.messages
   .create({
     body: 'this is your Otp : '+otp,
     to: req.body.Mobile, // Text this number
     from: '+12534004327', // From a valid Twilio number
   })
   .then((message) => console.log(message.sid));

      }
      else{
        
        console.log("not found")
        response.json(data)
        console.log(data.matchedOrNot)

      }

    }
  })

  // client.messages
  // .create({
  //   body: 'this is your Otp : '+otp,
  //   to: req.body.Mobile, // Text this number
  //   from: '+12534004327', // From a valid Twilio number
  // })
  // .then((message) => console.log(message.sid));

})


app.listen(port, () => {
  console.log("server started on port 5000");
});