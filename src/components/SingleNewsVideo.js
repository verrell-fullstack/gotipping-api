import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import Video from './Video'

import ImageButton from './ImageButton'

function SingleNewsVideo({ content }) {
  return(
    <>
      <div className="content-list">
        <div className="title-holder">
          <h6 className="title c-black">{content.title}</h6>
          <div className="daytime-holder c-periwinkle">
            <span className="day">{content.day}</span>
            <span className="separator"></span>
            <span className="time">{content.time}</span>
          </div>
        </div>
        <div className="content-holder">
          <div className="media-wrapper">
            <div className={classnames("media-holder", {
              "video-card" : content.video
            })}>
              {content.video ? <Video videoSrc={content} /> : content.image ? <img src={ content.image } className="img" alt={ content.alt } /> : ''}
              {content.video ? '' : content.btnName ? <Link to='/' className="btn-blue btn-card">{content.btnName}</Link> : ''}
            </div>
          </div>
          <div className="details-holder">
            <p className="desc">{content.desc}</p>
            {content.imageButton.map((item, i) => {
              return(
                <ImageButton 
                  key={i}
                  content={item} 
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleNewsVideo 