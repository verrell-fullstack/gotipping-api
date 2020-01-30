import React from 'react'
import classnames from 'classnames'
import useForm from 'react-hook-form'

function ForgotPassword({forgotPasswordOpen, openLogin, forgotpasswordMessage, openForgotMessage}) {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => { openForgotMessage() }

  return(
    <>
      <div className={classnames("modal-wrapper modal-forgot-password", {
        "modal-show" : forgotPasswordOpen
      })}>
        <div className="modal-content">
          <div className="header-holder">
            <div className="arrow-holder" onClick={openLogin}>
              <span className="icon-left"></span>
            </div>
            <p className={classnames("t-modal-title c-black t-message-title", {
              "successful-message" : forgotpasswordMessage
            })}>Forgot Password</p>
          </div>
          <div className="content-holder">
            <div className={classnames("form-content-holder", {
              "form-content-hide": forgotpasswordMessage
            })}>
              <h6 className="t-center t-modal-title c-black">Forgot your password?</h6>
              <p className="t-center t-paragraph t-note">Enter your email below to receive your password reset instructions</p>
              <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-holder">
                  <div className="input">
                    <label className="form-label" htmlFor="forgotPasswordEmail">Email</label>
                    <input id="forgotPasswordEmail" className={classnames("form-field", {
                    "form-error": errors.forgotPasswordEmail
                  })} type="email" name="forgotPasswordEmail" placeholder="johndoe@gmail.com" ref={register({ 
                      required: 'Required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                      }
                    })}/>
                    <label className="form-message-error">{errors.forgotPasswordEmail && 'Email is required.'}</label>
                  </div>
                </div>
                <div className="action-holder">
                  {/* <button className="btn-blue form-button" type="submit" onClick={openForgotMessage}>Send</button> */}
                  <button className="btn-blue form-button" type="submit">Send</button>
                </div>
              </form>
            </div>
            <div className={classnames("message-holder", {
              "successful-message": forgotpasswordMessage
            })}>
              <p className="t-center t-paragraph t-message">You should receive an email from us shortly. We'll meet you back here.</p>
              <div className="action-holder">
                <button className="btn-blue form-button" type="button" onClick={openLogin}>Back to login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword