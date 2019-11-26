import React from 'react'
import { Link } from 'react-router-dom'

function Globals() {
  return (
    <>
      <div className="section-globals">
        <div className="container">
          <div className="global-wrapper">
            <br/>
            <hr/>
            <h1 className="t">Globals</h1>
            <hr/>
            <br/>
            <Link to="/" className="btn-blue c-white">BTN-BLUE</Link>
            <br/>
            <br/>
            <Link to="/" className="btn-fb c-white">Login with Facebook</Link>
            <br/>
            <br/>
            <Link to="/" className="btn-inverted-blue c-blue">Login Now</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Globals