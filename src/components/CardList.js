import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import SingleCard from './SingleCard'

function CardList({ content, loadMoreData }) {
  return(
    <>
      <div className="card-list-wrapper">
        {content.title ? <h5 className="t-section-title c-black">{content.title}</h5> : ''}
        <div className="content-wrapper bg-bluish-white">
          <div className={classnames("content-card-wrapper", {
            "card-d-row" : content.directionRow
          })}>
            <div className="card-wrapper">
              {
                content.allList.map((item, i) => {
                  return (
                    <SingleCard key={i} content={item} />
                  )
                })
              }
            </div>
            {content.hasLoadMore ?
              <div className="action-holder">
                <button className="btn-blue btn-action" onClick={loadMoreData}>{content.btnName}</button>
              </div>
              :
              ''
            }
          </div>
          <div className="ads-wrapper">
            <Link to="/">
              <img src={content.adsImage} className="img ads-image" alt="ads" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardList
