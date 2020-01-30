import React from 'react'
import classnames from 'classnames'

function SingleStat({ content }) {
  console.log(content)
  return (
    <div className={classnames("stat-body-holder", {
      "rank-up": content.rank > content.previewsRank,
      "rank-down": content.rank < content.previewsRank,
    })}>
      <div className="stat-rank">
        <p className="t-paragraph t-rank">
          <span className="fas fa-caret-up"></span>#{content.rank}
        </p>
      </div>
      <div className="stat-name">
        <div className="team">
          <div className="logo-holder">
            <img src={content.image} className="img" alt={content.alt} />
          </div>
          <h6 className="t-uppercase c-black t-name t-lg-up">{content.name}</h6>
          <h6 className="t-uppercase c-black t-name t-md-down">{content.nameAcronym}</h6>
        </div>
      </div>
      <div className="stat-score">
        <div className="stat-score-holder">
          <p className="t-paragraph t-head t-score">
            <span className={classnames("game-bet-holder", {
              "down": content.previewsFirstStat < content.firstStat,
              "up": content.previewsFirstStat > content.firstStat,
            })}>{content.firstStat}</span>
          </p>
          <p className="t-paragraph t-head t-score">
            <span className={classnames("game-bet-holder", {
              "down": content.previewsSecondStat < content.secondStat,
              "up": content.previewsSecondStat > content.secondStat,
            })}>{content.secondStat}</span>
          </p>
          <p className="t-paragraph t-head t-score">
            <span className={classnames("game-bet-holder", {
              "down": content.previewsThirdStat < content.thirdStat,
              "up": content.previewsThirdStat > content.thirdStat,
            })}>{content.thirdStat}</span>
          </p>
        </div>
      </div>
      <div className="stat-bets">
        <p className="t-paragraph t-bets">{content.bets}</p>
      </div>
    </div>
  )
}

export default SingleStat
