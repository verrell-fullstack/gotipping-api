import React from 'react'
import { Link } from 'react-router-dom'

import SinglePanel from './SinglePanel'

function PanelTabContent({ content, toggleBtn }) {

  console.log(content)

  return(
    <div className="panel-tab-wrapper bg-bluish-white">
      <div className="ads-wrapper ads-wrapper-top">
        <Link to="/">
          <img src={content.adsImage} className="img ads-image" alt="ads" />
        </Link>
      </div>
      <div className="panel-wrapper">
        {
          content.allList.map((item, i) => {
            return (
              <SinglePanel key={i} content={item} toggleBtn={toggleBtn} />
            )
          })
        }
        <div className="panel-list ads-panel-holder">
          <div className="ads-wrapper">
            <Link to="/">
              <img src={content.adsImage2} className="img ads-image" alt="ads" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanelTabContent