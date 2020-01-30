import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import useForm from 'react-hook-form'
import axios from 'axios';

function Register({registerOpen, signUpMessage, closeModal, openLogin, openRegisterMessage, showPassword, showPasswordText}) {
  const { register, handleSubmit, errors } = useForm()
  // const onSubmit = (data) => { openRegisterMessage() }
  
  const [value, setValue] = useState('')

  const handleChangeInput = event => {
    event.persist()
    console.log(event.target.name)
    console.log(event.target.value)

    setValue(
      prevState => ({...prevState, [event.target.name]: event.target.value})
    )
  }

  const handleSubmitForm = event => {
    // e.preventDefault()
    event.preventDefault()
    console.log('submitted')

    const user = {
      FirstName: value.fname,
      LastName: value.lname,
      Email: value.registerEmail,
      Password: value.registerPassword 
    };

    axios.post(`https://gotipping.dev/v1/organizations/t4BSVOgNGA3fyRnNftCy/users/register`, user)
    .then(res => {
      console.log(res.data);
    })
    .catch(function(error) {
      // console.log(error)
      console.log(error.response.data.Error.Message);
    });
  }

  return(
    <>
      <div className={classnames("modal-wrapper modal-register", {
        "modal-show" : registerOpen
      })}>
        <div className="modal-content">
          <div className="header-holder">
            <div className={classnames("close-holder", {
              "success-message-show" : signUpMessage
            })} onClick={closeModal}>
              <span className="btn-close"></span>
            </div>
            <div className={classnames("header-message", {
              "success-message" : signUpMessage
            })}>
              <div className="arrow-holder" onClick={openLogin}>
                <span className="icon-left"></span>
              </div>
              <p className={classnames("t-modal-title c-black t-message-title", {
                "successful-message" : signUpMessage
              })}>Sign Up</p>
            </div>
          </div>
          <div className="content-holder">
            <div className={classnames("form-content-holder", {
              "form-content-hide": signUpMessage
            })}>
              <h6 className="t-modal-title c-black">Sign Up</h6>
              
              <form className="form-wrapper" onSubmit={handleSubmitForm}>
                <div className="form-holder">
                  <div className="input">
                    <label className="form-label" htmlFor="fname">First Name</label>
                    <input 
                      id="fname" 
                      className={classnames("form-field", {
                        "form-error": errors.fname
                      })} 
                      type="text" 
                      name="fname" 
                      placeholder="John" 
                      ref={register({ required: true })}
                      onChange={handleChangeInput}
                    />
                    <label className="form-message-error">{errors.fname && 'First Name is required.'}</label>
                  </div>
                </div>
                <div className="form-holder">
                  <div className="input">
                    <label className="form-label" htmlFor="lname">Last Name</label>
                    <input 
                      id="lname" 
                      className={classnames("form-field", {
                      "form-error": errors.lname
                      })} type="text" 
                      name="lname" 
                      placeholder="Doe" 
                      ref={register({ required: true })}
                      onChange={handleChangeInput}
                    />
                    <label className="form-message-error">{errors.lname && 'Last Name is required.'}</label>
                  </div>
                </div>
                <div className="form-holder">
                  <div className="input">
                    <label className="form-label" htmlFor="registerEmail">Email</label>
                    <input 
                      id="registerEmail" 
                      className={classnames("form-field", {
                        "form-error": errors.registerEmail
                      })} 
                      type="email" 
                      name="registerEmail" 
                      placeholder="johndoe@gmail.com" 
                      ref={register({ 
                        required: 'Required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                        }
                      })}
                      onChange={handleChangeInput}
                    />
                    <label className="form-message-error">{errors.registerEmail && 'Email is required.'}</label>
                  </div>
                </div>
                <div className="form-holder">
                  <div className="input">
                    <label className="form-label" htmlFor="registerPassword">Password</label>
                    <input 
                      id="registerPassword" 
                      className={classnames("form-field", {
                        "form-error": errors.registerPassword
                      })} 
                      type={showPasswordText ? "text" : "password" } 
                      name="registerPassword" 
                      placeholder="***********" 
                      ref={register({ 
                        required: true,
                        minLength: 6,
                        maxLength: 20
                      })}
                      onChange={handleChangeInput}
                    />
                    <label className="form-message-error">{errors.registerPassword && 'Password is required.'}</label>
                    <span className={classnames("fas icon-eye", {
                    "fa-eye" : !showPasswordText,
                    "fa-eye-slash" : showPasswordText
                  })} onClick={showPassword}></span>
                  </div>
                </div>
                <div className="action-holder">
                  {/* <button className="btn-blue form-button" type="submit" onClick={openRegisterMessage}>Sign Up</button> */}
                  <button className="btn-blue form-button" type="submit">Sign Up</button>
                </div>
                <div className="flex other-opt">
                  <a href="/" className="btn-fb c-white" target="_blank" rel="noopener noreferrer nofollow"><span className="fab fa-facebook-f btn-icon-fa"></span>Sign Up with Facebook</a>
                  <a href="/" className="btn-google c-white" target="_blank" rel="noopener noreferrer nofollow"><span className="fab fa-google btn-icon-fa"></span>Sign up with Google</a>
                </div>
                <div className="flex question-holder">
                  <p className="t-paragraph t-question">Already have an account</p>
                  <Link to="/" className="btn-inverted-blue c-blue" onClick={openLogin}>Log In</Link>
                </div>
              </form>

            </div>
            <div className={classnames("message-holder", {
              "successful-message": signUpMessage
            })}>
              <p className="t-center t-paragraph t-message">We've just emailed you a link. Please check your inbox and confirm your email</p>
              <div className="action-holder">
                <button className="btn-blue form-button" type="button" onClick={openLogin}>Okay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register