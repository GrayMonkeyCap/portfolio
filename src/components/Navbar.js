import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar=()=>{
    return(
        <div className='navbar'>
            <NavLink exact to="/" activeClassName='active'>Home</NavLink>
            <NavLink exact to="/about" >About</NavLink>
            <NavLink exact to="/portfolio" >Portfolio</NavLink>
            <NavLink exact to="/resume" >Download Resume</NavLink>
        </div>
    )
}

export default Navbar;