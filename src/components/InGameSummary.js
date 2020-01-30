import React from 'react'

function InGameSummary({ content }) {
  const handleOnChange = () => {
    
  }
  
  return(
    <div className="ingame-summary-wrapper">
      {
        content.allList.map((item, i) => {
          return(
            <div key={i} className="game-holder">
              <div className="game-header-holder">
                <p className="c-black t-uppercase t-game-title">{item.accordionTitle}</p>
                <p className="c-black t-uppercase t-game-sched">{item.accordionRoundGame}</p>
              </div>
              <div className="game-header-choices">
                <div className="radio-holder">
                  <label className="custom-checkbox t-uppercase t-game-team">
                    <span className="name-bet-holder">
                      <span className="t-team-name">{item.teamAAcronym}</span>
                      <span className="game-bet-holder">
                        $ {item.teamABet}
                      </span>
                    </span>
                    <span className="game-img-holder">
                      <img src={item.teamAImage} className="game-img" alt="Team A" />
                    </span>
                    <input 
                      className="form-checkbox"
                      type="radio" 
                      name={item.idValue}
                      checked={true}
                      onChange={handleOnChange}
                    />
                    <span className="checkmark radiomark"></span>
                  </label>
                  <label className="custom-checkbox t-uppercase t-game-team">
                    <span className="name-bet-holder">
                      <span className="t-team-name">{item.teamBAcronym}</span>
                      <span className="game-bet-holder">
                        $ {item.teamBBet}
                      </span>
                    </span>
                    <span className="game-img-holder">
                      <img src={item.teamBImage} className="game-img" alt="Team A" />
                    </span>
                    <input 
                      className="form-checkbox"
                      type="radio" 
                      name={item.idValue}
                      onChange={handleOnChange}
                    />
                    <span className="checkmark radiomark"></span>
                  </label>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default InGameSummary