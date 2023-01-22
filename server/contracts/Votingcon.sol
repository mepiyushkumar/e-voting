// SPDX-License-Identifier: MIT
pragma solidity>=0.8.0;

contract Votingcon{

//variables

string[] namelist;


struct voter{

address voteraddress;
uint choice;
bool voted_or_not;
string voter_name;
}


struct candidate{

string candidate_name;
uint no_votes;
}

 mapping(uint=>candidate) private candidate_list;

uint private candidate_count=0;
string private Winner;
uint private finalResult=0;
uint public totalVoters=0;
uint private totalvotes=0;


address private Organizer_address;
string public Organizer_name;
mapping(address=> voter) private voter_register;

enum State {Created,Voting,Ended}

State public state;





//modifiers




//methods
constructor(){
    string memory name="uday";
    bytes memory check=bytes(name);
    for(uint i=0;i<check.length;i++){
        bytes1 ch=check[i];
        require((ch >= 0x41 && ch <= 0x5A)|| (ch >= 0x61 && ch <= 0x7A),"enter valid name");

    }


    

    Organizer_address=msg.sender;
    Organizer_name=name;
    state=State.Created;

}

function start_voting()public{

require(msg.sender==Organizer_address,"Only organizer can start the voting");    
    state=State.Voting;
}

function get_status()view public returns(State){

require(msg.sender==Organizer_address,"Only organizer can start the voting");    
    

    return state;
}


function end_voting()public{

require(msg.sender==Organizer_address,"Only organizer can end the voting"); 
    state=State.Ended;

for(uint i=0;i<candidate_count;i++){
    if(candidate_list[i].no_votes>finalResult){
        finalResult=candidate_list[i].no_votes;
        Winner=candidate_list[i].candidate_name;
    }
}


}








function addCandidates(string memory name)public {

require(state!=State.Voting && state !=State.Ended);    

require(msg.sender==Organizer_address,"only organizer can add the candidates");

bytes memory check=bytes(name);
    for(uint i=0;i<check.length;i++){
        bytes1 ch=check[i];
        require((ch >= 0x41 && ch <= 0x5A)|| (ch >= 0x61 && ch <= 0x7A),"enter valid candidate name");

    }






candidate memory c;
c.candidate_name=name;
namelist.push(name);
c.no_votes=0;

candidate_list[candidate_count]=c;
candidate_count++;

}












////VOTER SIDE FUNCTIONS


function get_candidates_list()view public returns(string[] memory){

require(candidate_count>0,"the are no candidates");

return namelist;

}






function register_voter(string memory name)public{

require(state!=State.Ended,"voting process has Ended");
require(voter_register[msg.sender].voteraddress!=msg.sender,"already registered");

voter memory v;
 v.voteraddress=msg.sender;
 v.voter_name=name;
 v.voted_or_not=false;
 v.choice=0;

 voter_register[v.voteraddress]=v;

 totalVoters=totalVoters+1;

}


 
function do_vote(uint c)public{

require(state==State.Voting,"Voting has not started");
require(c<=candidate_count);    

require(bytes(voter_register[msg.sender].voter_name).length!=0 && voter_register[msg.sender].voted_or_not==false,"you have already voted");

voter_register[msg.sender].voted_or_not=true;
voter_register[msg.sender].choice=c;

candidate_list[c].no_votes++;

totalvotes++;

} 


function get_Result()view public returns(uint,string memory){

    require(state==State.Ended);
    return (finalResult,Winner);
}

}