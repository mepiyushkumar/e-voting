import React from 'react';
import { NavLink } from 'react-router-dom';
const Home = () => {

	return (
		<div >


			<div className='container mt-5 rounded-5 shadow-lg myback2 ' style={{ width: "50%" }} >


				<div className='row  p-5 d-flex justify-content-center text-center '><NavLink to='/Voter' style={{ cursor: "pointer" }}><button type='button' className='btn btn-lg btn-outline-dark fw-bold border-4 border border-dark' style={{ width: "250px", wordWrap: "break-word" }} > Voter Login/Sign up</button></NavLink></div>
				<div className='row  p-5 d-flex justify-content-center text-center'><NavLink to='/Organizer/Login' style={{ cursor: "pointer" }}><button type='button' className='btn btn-lg btn-outline-dark fw-bold border-4 border border-dark' style={{ width: "250px", wordWrap: "break-word" }}>Organizer Login</button></NavLink> </div>

			</div>

		</div>
	)
};

export default Home;

