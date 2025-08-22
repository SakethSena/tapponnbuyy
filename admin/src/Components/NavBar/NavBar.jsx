import React from 'react'
import './NavBar.css'
import navlogo from '../Assets/nav-logo.svg'
import navprofileIcon from '../Assets/nav-profile.svg'

const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} className='nav-logo' alt="" />
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default NavBar