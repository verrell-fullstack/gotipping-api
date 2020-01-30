import React from 'react'

import SingleNewsVideo from './SingleNewsVideo'

function CardList({ content }) {
  return(
    <>
      <div className="content-wrapper">
        {
          content.allList.map((item, i) => {
            return (
              <SingleNewsVideo key={i} content={item} />
            )
          })
        }
      </div>
    </>
  )
}

export default CardList
