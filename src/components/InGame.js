import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { namify } from '../components/Helpers'

function InGame({ game, btnCallback, innerSelected, x, handleTeamSelect, accordionId, swiperTabId, eventId}) {
  

  return(
    <>
      <div className="game-holder">
        <Accordion>
          {
            game.map((item, i) => {
              const [numberValue, setNumber] = useState(0)
              const handleIncreaseMargin = e => {
                setNumber(numberValue + 1)
              }
            
              const handleDecreaseMargin = e => {
                setNumber(numberValue - 1)
              }

              const rootId = `${x}-${i}`

              return (
                <AccordionItem key={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="game-header-holder">
                        {item.gameTitle ? <p className="c-black t-uppercase t-game-title">{item.gameTitle}</p> : ''}
                        {item.gameTime ? <p className="c-black t-uppercase t-game-sched">{item.gameTime}</p> : ''}
                      </div>
                      <div className="game-header-choices">
                        <div className="radio-holder">
                          <label className="custom-checkbox t-uppercase t-game-team">
                            <span className="name-bet-holder">
                              <span className="t-lg-up">
                                {item.teamAName}
                              </span>
                              <span className="t-md-down">
                                {item.teamAAcronym}
                              </span>
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
                              name={namify(accordionId, swiperTabId, eventId, item.gameId)}
                              value={item.teamAAcronym}
                              onChange={event =>
                                handleTeamSelect({
                                  target: event.target,
                                  accordionId: accordionId,
                                  swiperTabId: swiperTabId,
                                  eventId: eventId,
                                  gameId: item.gameId
                                })
                              }
                            />
                            {/* {console.log(item.gameId)} */}
                            <span className="checkmark radiomark"></span>
                          </label>
                          <label className="custom-checkbox t-uppercase t-game-team">
                            <span className="name-bet-holder">
                              <span className="t-lg-up">
                                {item.teamBName}
                              </span>
                              <span className="t-md-down">
                                {item.teamBAcronym}
                              </span>
                              <span className="game-bet-holder">
                                $ {item.teamBBet}
                              </span>
                            </span>
                            <span className="game-img-holder">
                              <img src={item.teamBImage} className="game-img" alt="Team A"  />
                            </span>
                            <input
                              className="form-checkbox"
                              type="radio"
                              name={namify(accordionId, swiperTabId, eventId, item.gameId)}
                              value={item.teamBAcronym}
                              onChange={event =>
                                handleTeamSelect({
                                  target: event.target,
                                  accordionId: accordionId,
                                  swiperTabId: swiperTabId,
                                  eventId: eventId,
                                  gameId: item.gameId
                                })
                              }
                            />
                            <span className="checkmark radiomark"></span>
                          </label>
                        </div>
                      </div>
                      <div className="game-header-stats">
                        <Link to="/">
                          <img src={require('../assets/images/stats-img.png')} alt="Stats" />
                        </Link>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="margin-holder">
                      <p className="t-paragraph t-uppercase c-periwinkle t-margin-text">by what margin: </p>
                      <div className="incrementers-holder">
                        <div className="btn-incrementers" onClick={handleDecreaseMargin}>-</div>
                        <input 
                          className="quantity-holder" 
                          name={rootId} 
                          type="text" 
                          id={rootId} 
                          value={numberValue <= 9 ? `${numberValue}` :  numberValue}
                          onChange={() => btnCallback(`${rootId}`)}
                        >
                        </input>
                        <div className="btn-incrementers" onClick={handleIncreaseMargin}>+</div>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              )
            })
          }
        </Accordion>
      </div>
    </>
  )
}

export default InGame