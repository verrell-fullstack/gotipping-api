import React from 'react'
import { Link } from 'react-router-dom'

function SinglePanel({ content, toggleBtn }) {

  console.log(content.tabIndex)

  return(
    <>
      <div className="panel-list">
        <div className="panel-header bg-savoy-blue">
          <h6 className="t-panel-header c-white">{ content.title }</h6>
          {/* <Link to={content.url} className="c-perano view-link">View All</Link> */}
          <button className="c-perano view-link" 
            onClick={() => { toggleBtn(content.tabIndex); console.log(content.tabIndex) }}>
            View All
          </button>
        </div>
        <div className="panel-body">
          {content.content}
        </div>
      </div>
    </>
  )
}

export default SinglePanel