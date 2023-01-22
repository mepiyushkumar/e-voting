
import React, { useState } from 'react';
import axios from 'axios';
import Getweb3 from './Getweb3';

const votingABI = require("./Votingcon.json");


const Voter_Register = () => {


    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [DOB, setDOB] = useState("")
    const [Email, setEmail] = useState("")
    const [Aadhar, setAadhar] = useState("")
    const [Mobile, setMobile] = useState("")
    const [Address, setAddress] = useState("")


    const putIN_DB = async () => {

        console.log(Email)


        await walinstance.methods.register_voter(FirstName + LastName).send({ from: wallet_address }).then((data) => {
            axios.post('http://localhost:5000/putINDB', {
                FirstName: FirstName,
                LastName: LastName,
                DOB: DOB,
                Email: Email,
                Aadhar: Aadhar,
                Mobile: "+91" + Mobile,
                Address: Address,
                isRegistered: true,
            })

        })


        alert("Voter Registered");

    }
    const [wallet_address, setwallet_address] = useState()
    const [walinstance, setinstance] = useState()


    async function wallet_connect() {
        try {
            console.log('hello')
            const web3 = await Getweb3();
            const wallet_addresses = await web3.eth.requestAccounts();
            const walletbalance = await web3.eth.getBalance(wallet_addresses[0]);
            console.log(walletbalance);
            const walletbalance_inEth = Math.round(web3.utils.fromWei(walletbalance) * 1000) / 1000;
            console.log(walletbalance_inEth);
            const net_id = await web3.eth.net.getId();
            console.log('injected web3 detected', wallet_addresses, net_id);
            const deployednetwork = await votingABI.networks[net_id];
            const instance = new web3.eth.Contract(
                votingABI.abi, deployednetwork.address
            );




            setinstance(instance);
            setwallet_address(wallet_addresses[0]);




        } catch (error) {
            console.log(error);
        }
    }




    return (

        <div style={{ fontSize: "20px" }} >

            <div className='container shadow-lg my-5 rounded-5 myback2' style={{ width: "60%" }} >

                <div className='display-3 justify-content-center row'>Voter Details</div>

                <form action="" >


                    <div className='row p-3'>

                        <div className='col-lg my-3'>
                            <input type="text" className='form-control  border border-3 border-dark' id='fname' placeholder='First Name' value={FirstName} onChange={e => { setFirstName(e.target.value) }} />
                        </div>

                        <div className='col-lg my-3'>


                            <input type="text" className='form-control  border border-3 border-dark' id="lname" placeholder='Last Name' value={LastName} onChange={e => { setLastName(e.target.value) }} />
                        </div>


                    </div>


                    <div className='row p-3 my-3'>

                        <div className='form-group'>
                            <label htmlFor="DOB" className='form-label'>Select your DOB :</label>
                            <input type="date" className='border border-3 border-dark form-control ' id="DOB" value={DOB} onChange={e => { setDOB(e.target.value) }} />
                        </div>
                    </div>







                    <div className='row p-3 justify-content-center'>

                        <div className='form-group'>
                            <label htmlFor="mail" className='form-label'>Email :</label>
                            <input type="text" className='border border-3 border-dark form-control ' id='mail' placeholder='Enter Your Email' value={Email} onChange={e => { setEmail(e.target.value) }} />
                        </div>

                    </div>


                    <div className='row p-3 justify-content-center'>

                        <div className='form-group'>
                            <label htmlFor="aadhar" className='form-label'>Aadhar :</label>
                            <input type="text" className='border border-3 border-dark form-control ' id='aadhar' placeholder='Enter Your Aadhar Number' required pattern="[0-9]{12}" value={Aadhar} onChange={e => { setAadhar(e.target.value) }} />
                        </div>

                    </div>


                    <div className='row p-3 justify-content-center'>

                        <div className='form-group'>
                            <label htmlFor="phone" className='form-label'>Mobile :</label>
                            <input type="tel" className='border border-3 border-dark form-control ' id='phone' placeholder='Enter Your Phone Number' value={Mobile} onChange={e => { setMobile(e.target.value) }} />
                        </div>

                    </div>



                    <div className='row my-3 p-3'>

                        <div className='form-group'>
                            <div className="md-form">
                                <label htmlFor="address">Enter your Address:</label>
                                <textarea id="address" className="md-textarea form-control border border-3 border-dark" rows="3" placeholder="Write something here..." value={Address} onChange={e => { setAddress(e.target.value) }}></textarea>
                            </div>
                        </div>


                    </div>


                    <div className='row my-3 p-3 justify-content-center'>
                        <button type='button' value="otp_" className='btn btn-dark fw-bold mx-5' onClick={() => { wallet_connect() }} style={{ width: "120px", fontSize: '25px' }}>Connect Wallet</button>
                        <button className="btn btn-dark fw-bold " type="button" onClick={() => { putIN_DB() }} style={{ width: "120px", fontSize: "25px" }}>Submit</button>
                    </div>













                </form>










            </div>











        </div>




    );



};

export default Voter_Register;