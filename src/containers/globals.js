import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import useForm from 'react-hook-form'

function Globals({btnToggle}) {
  const [modalOpen, setModalOpen] = useState(false)
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => { }

  const openModal = () => {
    setModalOpen(!modalOpen)
    // reference.current.classList.add('backdrop')
  }

  const closeModal = () => {
    setModalOpen(false)
    // reference.current.classList.remove('backdrop')
  }

  return (
    <>
      <main className={classnames("section-globals", {
        "content-collapsed": !btnToggle
      })}>
        <div className="container">
          <div className="global-wrapper">
            <br/>
            <div className="global-holder">
              <hr/>
              <h1 className="t">Globals</h1>
              <hr/>
              <br/>
              <Link to="/" className="btn-blue c-white">BTN-BLUE</Link>
              <br/>
              <br/>
              <Link to="/" className="btn-fb c-white"><span className="fab fa-facebook-f btn-icon-fa"></span>Login with Facebook</Link>
              <br/>
              <br/>
              <Link to="/" className="btn-google c-white"><span className="fab fa-google btn-icon-fa"></span>Sign up with Google</Link>
              <br/>
              <br/>
              <Link to="/" className="btn-plain-text c-royal-blue">Forgot Password?</Link>
              <br/>
              <br/>
              <Link to="/" className="btn-inverted-blue c-blue">Log In</Link>
              <br/>
              <br/>
              <button className="btn-blue" onClick={openModal}>Modal</button>
              <div className={classnames("modal-wrapper", {
                "modal-show" : modalOpen === true
              })}>
                <div className="modal-content">
                  <div className="header-holder">
                    <div className="close-holder" onClick={closeModal}>
                      <span className="btn-close"></span>
                    </div>
                  </div>
                  <div className="body-holder">
                    <h6 className="t-modal-title c-black">Log in</h6>
                  </div>
                </div>
              </div>
              <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-holder">
                  <div className="input">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className={classnames("form-field", {
                    "form-error": errors.email
                  })} type="email" name="email" placeholder="johndoe@gmail.com" ref={
                    register({
                      required: 'Required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                      }
                    })}/>
                    <label className="form-message-error">{errors.email && 'Email is required.'}</label>
                  </div>
                </div>
                <label className="custom-checkbox">Remember me?
                  <input className="form-checkbox" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <div className="action-holder">
                  <button className="btn-blue form-button" type="submit">Log in</button>
                </div>
              </form>
              <div className="close-holder">
                <span className="btn-close"></span>
              </div>
            </div>
            <br/>
            <div className="text-global-holder">
              <hr/>
              <h2>Text</h2>
              <hr/>
              <h1 className="t-h1">Make your own sports tipping</h1>
              <h2 className="t-h2">Get started with Go Tipping today!</h2>
              <h6 className="t-modal-title c-black">Login</h6>
              <h5 className="t-dashboard-title c-black">Basketball</h5>
              <h6 className="t-panel-header c-black">In-Game Tipping Competition</h6>
              <p className="t-paragraph">Lorem ipsum</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Globals
