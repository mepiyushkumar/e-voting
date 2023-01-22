var Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');



var SmartContractAddress = "0xfaB521f248FDba75DFbA8Fd6f353Ae3Fb95bD5bA";
var ABI=require("./build/contracts/Votingcon.json");
var SmartContractABI =ABI["abi"];
var address ;
var privatekey;
var rpcurl = "HTTP://127.0.0.1:8545";



var provider; 
var web3;
var myContract ;


module.exports={


  set_User:async function (add,key){

    console.log(add+"          "+key )

 address = add;
 privatekey = key;
 provider = new Provider(privatekey, rpcurl);
 web3 = new Web3(provider)
 myContract = new web3.eth.Contract(SmartContractABI, SmartContractAddress);


}



,

addCandidates:async function (para){

  console.log("in function");
  
  try{

  await myContract.methods.addCandidates(para).send({from : address}).then(data=>console.log(data));
 
  }catch(err){console.log(err)}

  //var receipt = await myContract.methods.updateData(900).send({ from: address });
  

  //var newvalue = await myContract.methods.get_candidates_list().call();
  //console.log("newvalue", newvalue);

  console.log("done with all things");

}

,
get_candidates_list:async function (){

     var newvalue = await myContract.methods.get_candidates_list().call();
    console.log("newvalue", newvalue);

  console.log("done with all things");

}









,get_status:async function  (){

  var newvalue = await myContract.methods.get_status().call();
 console.log("newvalue", newvalue);

console.log("done with all things");

}




,register_voter:async function  (para){

    console.log("in async function");
    
  
    var oldvalue = await myContract.methods.register_voter(para).send({from : address});
    console.log("oldvalue", oldvalue); 
  
  
    //var receipt = await myContract.methods.updateData(900).send({ from: address });
    
  
    //var newvalue = await myContract.methods.get_candidates_list().call();
    //console.log("newvalue", newvalue);
  
    console.log("done with all things");
    
  }



  ,start_voting:async function (){

    var newvalue = await myContract.methods.start_voting().send({from : address});
   console.log("newvalue", newvalue);

 console.log("done with all things");

}


,end_voting:async function (){

    var newvalue = await myContract.methods.end_voting().send({from : address});
   console.log("newvalue", newvalue);

 console.log("done with all things");

} 

,get_Result:async function (){

    var newvalue = await myContract.methods.get_Result().call();
   console.log("winner votes : "+newvalue[0]+" \nwinner : "+newvalue[1]);

   let data={
    votes:newvalue[0],
    winner:newvalue[1],
   }
   


 console.log("done with all things");
 return JSON.stringify(data);

}



,do_vote:async function (para){

    console.log("in async function");
    
  
    var oldvalue = await myContract.methods.do_vote(parseInt(para)).send({from : address});
    console.log("oldvalue", oldvalue); 
  
  
    //var receipt = await myContract.methods.updateData(900).send({ from: address });
    
  
    //var newvalue = await myContract.methods.get_candidates_list().call();
    //console.log("newvalue", newvalue);
  
    console.log("done with all things");
  
  }


}







// addCandidates("chiru").then(()=>{
//   console.log("end");
//   setTimeout((async function() { 
//     return process.exit(0);
//     }), 1000);
// })

// get_Result().then(()=>{
//       console.log("end");
//       setTimeout((function() { 
//         return process.exit(0);
//         }), 1000);
//     });
    