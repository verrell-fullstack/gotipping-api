import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return(
    <div className="home">
      <div className="container">
        <div className="home-wrapper">
          <h1>This is the About page</h1>
          <Link to="/">Link to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default About