import React from 'react'
import './style.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='incentive-logo'>Incentiv.</div>
        <div className='nav-options-div'>
            <a href='/' className='nav-options'>Feature</a>
            <a href='/' className='nav-options'>About Us</a>
            <a href='/' className='nav-options'>Pricing</a>
            <a href='/' className='nav-options'>Login</a>
        </div>
    </div>
  )
}

export default Navbar