import React from 'react'
import SingleStat from '../components/SingleStat'

function StatList({ content }) {
  return (
    <div className="stat-wrapper">
      <div className="stat-header-holder">
        <div className="stat-rank">
          <p className="t-paragraph t-head">Rank</p>
        </div>
        <div className="stat-name">
          <p className="t-paragraph t-head">Team Name</p>
        </div>
        <div className="stat-score">
          <div className="stat-score-holder">
            <p className="t-paragraph t-head t-score">1X</p>
            <p className="t-paragraph t-head t-score">X</p>
            <p className="t-paragraph t-head t-score">2X</p>
          </div>
        </div>
        <div className="stat-bets">
          <p className="t-paragraph t-head">Bets</p>
        </div>
      </div>
      {
        content.allList.map((item, i) => {
          return (
            <SingleStat key={i} content={item} />
          )
        })
      }
      {/* <table>
        <tr className="stat-header">
          <th>Rank</th>
          <th>Team name</th>
          <th>1X</th>
          <th>X</th>
          <th>2X</th>
          <th>Bets</th>
        </tr>
        {
          content.allList.map((item, i) => {
            return (
              <SingleStat key={i} content={item} />
            )
          })
        }
      </table> */}
    </div>
  )
}

export default StatList
