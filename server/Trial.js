const { json } = require('body-parser');
const obj=require( './Voting_block.js');

obj.set_User("0xc8E2F9e7736f1890AF610b4c40D2fFA3A49fA07d","bded762cf0836641ba0297c81c542172db407e9eb6cf038b6d32853f6573eb40").then(()=>{


  console.log("end");
  obj.get_Result().then(data=>console.log(JSON.parse(data)));
  
});


// obj.addCandidates("Raj").then(()=>{
//     console.log("end");
//     setTimeout((function() { 
//       return process.exit(0);
//       }), 1000);
//   });