import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import Video from '../components/Video'

function SingleCard({ content }) {
  return(
    <>
      <div className="card-list">
        <div className="card-link c-black">
          <div className="media-wrapper">
            <div className={classnames("media-holder", {
              "image-card" : content.image,
              "video-card" : content.video
            })}>
              {content.video ? <Video videoSrc={content} /> : content.image ? <img src={ content.image } className="img" alt={ content.alt } /> : ''}
              {content.video ? '' : content.btnName ? <Link to='/' className="btn-blue btn-card">{content.btnName}</Link> : ''}
              {/* {content.video ? 
                <div className="video-duration">
                  <span>25:32</span>
                </div>
                :
                ''
              } */}
            </div>
          </div>
          <div className="text-holder">
            <h3 className="title c-black">{ content.title }</h3>
            <p className="desc">{ content.desc }</p>
            <div className="author-date t-uppercase">
              <p className="author c-periwinkle">{ content.author }</p>
              <span className="separator">|</span>
              <p className="date c-periwinkle">{ content.date }</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleCard
