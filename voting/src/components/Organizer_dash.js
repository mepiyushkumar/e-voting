import React, { useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import Candidate_Register from './Candidate_Register';

const Organizer_dash = (props) => {

  const [winner, setwinner] = useState("")
  const [votes, setvotes] = useState(0)

  function Candidate_register() {
    let adder = ReactDOM.createRoot(document.getElementById('add_div'));
    console.log(" dash " + props.wallet_address)
    adder.render(<React.StrictMode> <Candidate_Register wallet_address={props.wallet_address} instance={props.instance}></Candidate_Register></React.StrictMode>)
  }



  async function get_Result() {

    await props.instance.methods.get_Result().call().then((data) => {
      console.log(data)
      setwinner(data[1]);
      setvotes(data[0]);

      let x = document.getElementById("winner");
      x.innerHTML = '';
      let div1 = document.createElement('div');
      let p1 = document.createElement('p');
      p1.innerHTML = 'Winner : ' + data[1];
      let p2 = document.createElement('p');
      p2.innerHTML = 'votes : ' + data[0];




      div1.appendChild(p1);
      div1.appendChild(p2);
      x.appendChild(div1);





      alert("the results are calculated ...");
    })

  }





  async function start_voting() {

    console.log("started");



    await props.instance.methods.start_voting().send({ from: props.wallet_address }).then((data) => { alert("the voting started"); })



  }


  async function end_voting() {

    await props.instance.methods.end_voting().send({ from: props.wallet_address }).then((data) => { alert("the voting ended"); })


  }







  return (
    <div>

      <div className='container my-3 myback2'>

        <div className='row  p-5 d-flex justify-content-center text-center '><button type='button' className='btn btn-lg btn-outline-dark fw-bold border-4 border border-dark' style={{ width: "250px", wordWrap: "break-word" }} onClick={() => { Candidate_register() }}>Add Candidate</button></div>
        <div className='row' id="add_div"> </div>
        <div className='row  p-5 d-flex justify-content-center text-center '><button type='button' className='btn btn-lg btn-outline-dark fw-bold border-4 border border-dark' style={{ width: "250px", wordWrap: "break-word" }} onClick={() => { start_voting() }}>Start Voting</button></div>

        <div className='row  p-5 d-flex justify-content-center text-center '><button type='button' className='btn btn-lg btn-outline-dark fw-bold border-4 border border-dark' style={{ width: "250px", wordWrap: "break-word" }} onClick={() => { end_voting() }}>End Voting</button></div>

        <div className='row  p-5 d-flex justify-content-center text-center '><button type='button' className='btn btn-lg btn-outline-dark fw-bold border-4 border border-dark' style={{ width: "250px", wordWrap: "break-word" }} onClick={() => { get_Result() }}>Get Result</button></div>
        <div id='winner' className='row p-1 d-flex justify-content-center text-center bg-info display-3' ></div>


      </div>







    </div>
  );
}




export default Organizer_dash;
