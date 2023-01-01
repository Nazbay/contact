import React from 'react'
import './style.css'
import logo from '../../photos/logo.png'
const Header = () => {
  return (
    <header className="header">
       
        <img src={logo} alt="" />
        <h2>MyContacts</h2>

    </header>
  )
}

export default Header