import React, { Component } from 'react';  
import {NavLink} from 'react-router-dom';
import './All.css';





export class NavBar extends Component {
  render() {
    return (

      
        <div className='container-fluid bg-dark text-white '>

        <div className=' row '>
        
        <div className=' col-lg-6 py-3 m-6 h2'> <NavLink to="/" style={{textDecoration:'none',color:"white" ,cursor:"pointer" }}>E-Voting</NavLink></div>

        <div className=' col-lg-2 py-3 m-6 display-6'> <NavLink to="/" style={{textDecoration:'none',color:"white" ,cursor:"pointer" }}>Home</NavLink></div>

        <div className=' col-lg-2 py-3 m-6 display-6'> <NavLink  to="/Instructions" style={{textDecoration:'none',color:"white" ,cursor:"pointer" }}>Instructions</NavLink></div>

        <div className=' col-lg-2 py-3  display-6'> <NavLink  to="/contact" style={{textDecoration:'none',color:"white" ,cursor:"pointer" }}>Contact Us</NavLink></div>
        



        </div>

        </div>
       
            
          
    )
  }
}

export default NavBar