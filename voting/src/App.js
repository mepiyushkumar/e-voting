import './App.css';
import './All.css';
import React,{useEffect,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NavBar from './NavBar';
import Voter from './components/Voter'
import CandidateRegister from './components/Candidate_Register'
import VoterRegister from './components/Voter_Regsiter';
import VoterLogin from './components/Voter_Login';
import OrganizerLogin from './components/Organizer_Login';
import Instruction from './components/Instruction';

function App() { 

	return (
		<div >

			<BrowserRouter>
			  
				<NavBar></NavBar>
				<div className='backbg' >
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/contact" element={<Contact />} />
					<Route exact path="/Instructions" element={<Instruction />} />
					<Route exact path="/Voter" element={<Voter/>} />
					<Route exact path="/Candidate/Register" element={<CandidateRegister/>} />
					<Route exact path="/Voter/Register" element={<VoterRegister/>} />
					<Route exact path="/Voter/Login" element={<VoterLogin/>} />
					<Route exact path="/Organizer/Login" element={<OrganizerLogin/>} />

				</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
