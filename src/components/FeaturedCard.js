import React from 'react'

import ImageButton from '../components/ImageButton'

function FeaturedCard({content}) {
  return(
    <>
      <div className="section-featured bg-bluish-white">
        <div className="content-wrapper">
          <div className="video-holder">
             <iframe
                src={content.url}
                title={content.title}
                width="100%"
                height="100%"
                frameBorder="0"
             />
          </div>
          <div className="content-holder">
            <h4 className="title c-black">{content.title}</h4>
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

export default FeaturedCard