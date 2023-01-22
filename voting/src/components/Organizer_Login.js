import React, { useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import Organizer_dash from './Organizer_dash';

import Getweb3 from './Getweb3';

const votingABI  = require("./Votingcon.json");


const Organizer_Login=()=>{






    const [wallet_address,setwallet_address]=useState()
    const [walinstance,setinstance]=useState()
    



    function orgdash(){

        


        const thank = ReactDOM.createRoot(document.getElementById('orglog'));
        console.log(" login " + wallet_address)

        thank.render(<React.StrictMode><Organizer_dash   wallet_address={wallet_address} instance={walinstance}   /></React.StrictMode>);



    }


    async function wallet_connect(){
        try{
            console.log('hello')
            const web3=await Getweb3();
            const wallet_addresses=await web3.eth.requestAccounts();
            const walletbalance=await web3.eth.getBalance(wallet_addresses[0]);
            console.log(walletbalance);
            const walletbalance_inEth=Math.round(web3.utils.fromWei(walletbalance)*1000)/1000;
            console.log(walletbalance_inEth);
            const net_id=    await web3.eth.net.getId();
            console.log('injected web3 detected',wallet_addresses,net_id);
            const deployednetwork=await votingABI.networks[net_id];
            const instance=new web3.eth.Contract(
                votingABI.abi,deployednetwork.address
            );
    
          


            setinstance(instance);
            setwallet_address(wallet_addresses[0]);
    
    
    

            }catch(error){
                console.log(error);
            }
      }





return(

<div >


<div className="container my-5 p-3 rounded-2 myback2" id="orglog">


<div >
    <form action="">
    <div className='row my-3 p-3 justify-content-center'>
    <button type='button' value="otp_" className="btn btn-dark" onClick={()=>{wallet_connect()}} style={{width:"120px",fontSize:'25px'}}>Connect Wallet</button>
    </div>


         <div className='row my-3 p-3 justify-content-center'>
    <button className="btn btn-dark" type="button" onClick={()=>{orgdash()}} style={{width:"120px",fontSize:"25px"}}>Submit</button>
    </div>











    </form>


</div>




</div>







</div>










);







};

export default Organizer_Login;