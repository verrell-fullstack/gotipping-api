import React from 'react'
import { Link } from 'react-router-dom'

import '../stylesheets/main.scss'

function Home() {
  return(
    <div className="home">
      <div className="container">
        <div className="home-wrapper">
          <h1>This is the Homepage</h1>
          <Link to="/globals" className="btn-inverted-blue c-blue">See all the Globals</Link>
          <br/>
          <Link to="/about" className="btn-inverted-blue c-blue">Link to about</Link>
        </div>
      </div>
    </div>
  )
}

export default Home