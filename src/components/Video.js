
import React from 'react'
// import PlayButton from '../components/PlayButton'

function Video({videoSrc}) {
  // const videoDuration = () => {
  // }

  return (
    <>
    <div className="video-holder">
       <iframe
        src={videoSrc.url}
        id="videos"
        title={videoSrc.title}
        width="100%"
        height="100%"
        frameBorder="0"
        duration="1"
      />
      {/* <img src={videoSrc} className="video featured-video" alt="" /> */}
      {/* <PlayButton /> */}
    </div>
    </>
  )
}

export default Video