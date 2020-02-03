import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import Login from '../components/Login'
import Register from '../components/Register'
import ForgotPassword from '../components/ForgotPassword'


import { logout } from '../utils';

function Header({btnToggle, setBtnToggle, reference, userLogged, setuserLogged, loginOpen, setLoginOpen, useHistory, isDashboard, user}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false)
  const [forgotpasswordMessage, setforgotpasswordMessage] = useState(false)
  const [signUpMessage, setSignUpMessage] = useState(false)
  const [showPasswordText, setShowPassword] = useState(false)

  console.log(user)

  const openMenu = () => {
    setMenuOpen(!menuOpen)
    reference.current.classList.toggle('no-scroll');
  }

  const openDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const toggleSidebar = () => {
    setBtnToggle(!btnToggle)
    setDropdownOpen(false)

    let windowWidth = window.innerWidth
    if (windowWidth <= 767) {
      if(btnToggle) {
        reference.current.classList.add('backdrop')
      } else {
        reference.current.classList.remove('backdrop')
      }
    } else {
      reference.current.classList.remove('backdrop')
    }
  }

  const openLogin = () => {
    setLoginOpen(!loginOpen)
    setRegisterOpen(false)
    setForgotPasswordOpen(false)
    setMenuOpen(false)
    reference.current.classList.add('backdrop')
  }

  const closeModal = () => {
    setLoginOpen(false)
    setRegisterOpen(false)
    setForgotPasswordOpen(false)
    setSignUpMessage(false)
    reference.current.classList.remove('backdrop')
    reference.current.classList.remove('no-scroll');
  }

  const openRegister = () => {
    setRegisterOpen(!registerOpen)
    setLoginOpen(false)
    reference.current.classList.add('backdrop')
  }

  const openForgotPassword = () => {
    setForgotPasswordOpen(!forgotPasswordOpen)
    setLoginOpen(false)
    reference.current.classList.add('backdrop')
  }

  const openForgotMessage = () => {
    setforgotpasswordMessage(!forgotpasswordMessage)
  }

  const openRegisterMessage = () => {
    setSignUpMessage(!signUpMessage);
  }

  const openUserLogged = () => {
    // setuserLogged(!userLogged)
    openLogin(false)
    reference.current.classList.remove('backdrop')
    reference.current.classList.remove('no-scroll');
  }

  const userLogout = () => {
    // setuserLogged(false)
    setDropdownOpen(false)
    logout()
  }

  const showPassword = () => {
    setShowPassword(!showPasswordText)
  }

  return (
    <>
    <header className={classnames("header bg-royal-blue", {
      'logged-in': isDashboard
    })}>
      <div className="container">
        <div className="header-wrapper">
          <div className="navbar-brand">
            <div className="btn-sidebar-holder" onClick={toggleSidebar}>
              <div className={classnames("navbar-toggler", {
                "sidebar-collapse": !btnToggle
              })}>
                <span className="icon-bar icon-bar-left"></span>
                <span className="icon-bar icon-bar-left"></span>
                <span className="icon-bar icon-bar-left"></span>
              </div>
            </div>
            <Link to="/" className="header-brand"><img src={require('../assets/images/logo.png')} className="logo-img" alt="GoTipping" /></Link>
          </div>
          <div className={classnames("navbar-toggler", {
            'navbar-toggler-active': menuOpen
          })} onClick={openMenu}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </div>
          <div className={classnames("navbar-collapse", {
            "collapsed" : menuOpen
          })}>
            <div className="navbar-nav">
              <ul className="list menu-list">
                <li className="menu-item"><Link to="/" className="menu-link t-uppercase c-white">Features</Link></li>
                <li className="menu-item"><Link to="/" className="menu-link t-uppercase c-white">Pricing</Link></li>
                <li className="menu-item"><Link to="/" className="menu-link t-uppercase c-white">About</Link></li>
                <li className="menu-item"><Link to="/" className="menu-link t-uppercase c-white">Contact</Link></li>
              </ul>
              <ul className="list login-holder">
                <li className="menu-item"><button className="btn menu-link t-uppercase c-white" onClick={openLogin}>Login</button></li>
                <li className="menu-item"><Link to="/" className="btn-blue c-white">Start Free Trial</Link></li>
              </ul>
            </div>
          </div>
          {
            user ? (
              <div className="logged-holder">
                <p className="t-paragraph c-white t-message-name">Welcome Back, <span>{user.FirstName}</span>!</p>
                <div className={classnames("dropdown-holder", {
                  "dropdown-open": dropdownOpen
                })}>
                  <button className="btn btn-user-img" onClick={openDropdown}>
                    <img src={require('../assets/images/user.png')} className="user-img" alt="User"/>
                    <span className="fas fa-caret-down icon-arrow c-blue"></span>
                  </button>
                  <ul className={classnames("dropdown-menu", {
                    "dropdown-menu-open": dropdownOpen
                  })}>
                    <li><Link to="/" className="t-paragraph c-black">Profile Settings</Link></li>
                    <li><Link to="/" className="t-paragraph c-cadet-blue">Account Settings</Link></li>
                    <li><Link to="/" className="t-paragraph c-cadet-blue">Notifications</Link></li>
                    <li><Link to="/" className="t-paragraph c-cadet-blue">Help</Link></li>
                    <li><Link to="/" className="t-paragraph c-red" onClick={userLogout}>Sign Out</Link></li>
                  </ul>
                </div>
              </div>
            ) : ('')
          }
        </div>
      </div>
    </header>
      
      
      <Login 
        useHistory={useHistory}
        loginOpen={loginOpen}
        closeModal={closeModal}
        openForgotPassword={openForgotPassword}
        openRegister={openRegister}
        openUserLogged={openUserLogged}
        showPassword={showPassword}
        showPasswordText={showPasswordText}
        // openLogin={openLogin}
      />
      <Register 
        registerOpen={registerOpen}
        signUpMessage={signUpMessage}
        closeModal={closeModal}
        openLogin={openLogin}
        openRegisterMessage={openRegisterMessage}
        showPassword={showPassword}
        showPasswordText={showPasswordText}
      />
      <ForgotPassword
        forgotPasswordOpen={forgotPasswordOpen}
        openLogin={openLogin}
        forgotpasswordMessage={forgotpasswordMessage}
        openForgotMessage={openForgotMessage}
      />
    </>
  )
}

export default Header

