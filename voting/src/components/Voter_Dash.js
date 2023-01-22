import React, { Component } from 'react';
import { useState } from "react";
import Corousel from 'react-elastic-carousel';

const Voter_Dash = (props) => {

  const [Thank, setThank] = useState(false)
  const [contin, setcontin] = useState(false)
  const [Candi_id, setCandi_id] = useState(0);
  const [Candi_name, setCandi_name] = useState("")
  const [choice, setchoice] = useState(0)


  let breakPoint = [


    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }


  ];





  let items = []
  items = props.items;
  console.log("daf")
  console.log(props.items)
  const get_items = () => {

    console.log(items)
    setcontin(true)



  }





  function do_vote(para) {
    para = parseInt(para)
    console.log(para)



    props.instance.methods.do_vote(para).send({ from: props.wallet_address }).then((data) => {
      console.log(data);

      alert("your vote has been recorded");


      setThank(true);


    });
  }






  return (
    <div className='container-fluid ' id='thankpage'>



      {(!contin) && (!Thank) &&
        <div style={{ fontSize: "30px" }} className='container shadow-lg rounded-5 my-5 myback2 text-center' >

          <p>Please use Your Vote Wisely</p>
          <button type='button' className='btn btn-dark fw-bold mx-5' style={{ width: "135px", fontSize: '25px' }} onClick={(e) => { get_items() }}>Continue</button>


        </div>
      }






      {(contin) && (!Thank) &&



        <div>

          <div className='row p-3 bg-light my-3 display-6 fw-bold justify-content-center shadow-lg'>
            Select a candidate to vote






          </div>

          <div className='row p-3'>

            <div className='container-fluid' style={{ width: "80%" }}>



              <Corousel breakPoints={breakPoint}>

                {items.map(item => <div className='container' key={item._id}>

                  <div className="card" style={{ width: "18rem" }}>




                    <div className="card-body">
                      <h5 className="card-title">{item.FirstName}</h5>
                      <p className="card-text">{item.LastName}</p>
                    </div>




                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"> <p className='fw-bold'> DOB : {item.DOB}</p></li>
                      <li className="list-group-item"><button type='button' className='btn btn-lg btn-outline-dark ' onClick={() => { setchoice(items.indexOf(item)); setCandi_name(item.FirstName + " " + item.LastName) }}  > Select</button></li>
                    </ul>


                  </div>

                </div>)}


              </Corousel>


            </div>
          </div>

          <div className='row m-5 '>
            <div className='container bg-light fw-bold rounded-4 shadow-lg  '>
              <div className='row p-1 m-5 justify-content-center' style={{ fontSize: "30px", fontFamily: "monospace" }}>
                you have selected : {choice}


              </div>
              <div className='row p-1 m-5 justify-content-center' style={{ fontSize: "30px", fontFamily: "monospace" }}>

                Candidate Name : {Candi_name}

              </div>

              <div className='row p-1 m-5 justify-content-center'>

                <button type='submit' className='btn btn-lg btn-outline-success fw-bold' style={{ width: '150px', fontSize: "25px" }} onClick={() => { do_vote(choice) }}>Submit</button>

              </div>


            </div>
          </div>







        </div>

      }


      {(contin) && (Thank) && <div>


        alert("Thank you for Voting")


      </div>





      }




    </div>

  )

}

export default Voter_Dash;
