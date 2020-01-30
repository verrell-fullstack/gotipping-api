import React from 'react'
import { Link } from 'react-router-dom'

function ImageButton({content}) {
  return(
    <>
      <Link to="/" className="btn-image c-periwinkle">
        <div className="image-holder">
          <img src={content.image} className="img" alt={content.alt} />
        </div>
        <span className="text-holder">{content.text}</span>
      </Link>
    </>
  )
}

export default ImageButton 