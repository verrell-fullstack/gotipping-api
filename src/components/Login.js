import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import useForm from 'react-hook-form'
import useReactRouter from 'use-react-router';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import axios from 'axios';
import { login } from '../utils';





function Login({loginOpen, closeModal, openForgotPassword, openRegister, openUserLogged, showPasswordText, showPassword, props}) {
  const { register, handleSubmit, errors } = useForm()
  // const onSubmit = (data) => { openUserLogged() }


  const { history } = useReactRouter()

  console.log(history)

  const [value, setValue] = useState('')
  const [user, setUser] = useState({})



  const handleChangeInput = event => {
    event.persist()
    // console.log(event.target.name)
    // console.log(event.target.value)

    setValue(
      prevState => ({...prevState, [event.target.name]: event.target.value})
    )
  }

  const handleSubmitForm = event => {
    // e.preventDefault()
    event.preventDefault()
    console.log('submitted')

    const user = {
      Email: value.loginEmail,
      Password: value.loginPassword
    };

    axios.post(`https://gotipping.dev/v1/organizations/t4BSVOgNGA3fyRnNftCy/users/login`, user)
    .then(res => {
      // console.log(res);
      console.log(res.data.Data);
      setUser(res.data.Data)
      ToastsStore.success("Login " + res.data.Status, 1000);

      login(res.data.Data.Id)

      // localStorage.setItem('User_ID', res.data.Data.Id)
      // props.history.push('/all-tab')
      history.push('/dashboard')
      openUserLogged()
      // setLoginSuccess(true)
      // props.history.push('/dashboard')
    })
    // .catch(function(error) {
    //   if(error) {
    //     console.log(error.response.data.Error.Message);
    //     ToastsStore.error(error.response.data.Error.Message);
    //   }
    // })
  }

  return(
    <>
      <div className={classnames("modal-wrapper modal-login", {
        "modal-show" : loginOpen
      })}>
        <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore}/>
        <div className="modal-content">
          <div className="header-holder">
            <div className="close-holder" onClick={closeModal}>
              <span className="btn-close"></span>
            </div>
          </div>
          <div className="content-holder">
            <h6 className="t-modal-title c-black">Log in</h6>                
            <form className="form-wrapper" onSubmit={handleSubmitForm}>
              <div className="form-holder">

                <div className="input">
                  <label className="form-label" htmlFor="loginEmail">Email</label>
                  <input 
                    id="loginEmail" 
                    className={classnames("form-field", {"form-error": errors.loginEmail})} 
                    type="email" 
                    name="loginEmail" 
                    placeholder="johndoe@gmail.com" 
                    ref={register({ 
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                      }
                    })} 
                    onChange={handleChangeInput}

                  />
                  <label className="form-message-error">{errors.loginEmail && 'Email is required.'}</label>
                </div>

              </div>
              <div className="form-holder">
                <div className="input">
                  <label className="form-label" htmlFor="loginPassword">Password</label>
                  <input 
                    id="loginPassword" 
                    className={classnames("form-field", {"form-error": errors.loginPassword})} 
                    type={showPasswordText ? "text" : "password"} 
                    name="loginPassword" 
                    placeholder="***********" 
                    ref={register({
                      required: true,
                      minLength: 6,
                      maxLength: 20
                    })}
                    onChange={handleChangeInput}


                  />
                  <label className="form-message-error">{errors.loginPassword && 'Password is required.'}</label>
                  <span className={classnames("fas icon-eye", {
                    "fa-eye" : !showPasswordText,
                    "fa-eye-slash" : showPasswordText
                  })} onClick={showPassword}></span>
                </div>
              </div>
              <div className="flex password-remember">
                <label className="custom-checkbox">Remember me?
                  <input className="form-checkbox" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <Link to="/" className="btn-plain-text c-royal-blue" onClick={openForgotPassword}>Forgot Password?</Link>
              </div>
              <div className="action-holder">
                {/* <button className="btn-blue form-button" type="submit">Log in</button> */}
                <input className="btn-blue form-button" type="submit" value="submit"/>
                {/* {errors.loginEmail && errors.loginPassword ? <button className="btn-blue form-button" type="submit">Log in</button> : <button className="btn-blue form-button" type="submit" onClick={openUserLogged}>Log in</button>} */}
              </div>
              <div className="flex other-opt">
                <a href="/" className="btn-fb c-white" target="_blank" rel="noopener noreferrer nofollow"><span className="fab fa-facebook-f btn-icon-fa"></span>Login with Facebook</a>
                <a href="/" className="btn-google c-white" target="_blank" rel="noopener noreferrer nofollow"><span className="fab fa-google btn-icon-fa"></span>Login with Google</a>
              </div>
              <div className="flex question-holder">
                <p className="t-paragraph t-question">New to GoTipping?</p>
                <Link to="/" className="btn-inverted-blue c-blue" onClick={openRegister}>Join Now</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login