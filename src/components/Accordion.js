import React, { useState, useEffect,  } from 'react'
import { Link } from 'react-router-dom'
import Swiper from 'react-id-swiper'
import classnames from 'classnames'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import InGame from '../components/InGame'


function TippingAccordion({ content, adsImg, handleTeamSelect }) {
  const [gallerySwiper, getGallerySwiper] = useState(null)
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null)
  const [westGallerySwiper, getWestGallerySwiper] = useState(null)
  const [westThumbnailSwiper, getWestThumbnailSwiper] = useState(null)

  const handleFormSubmit = e => {
    e.preventDefault();

    const elements = document.querySelectorAll(".btn-action.btn-action-abled")
      elements.forEach((item)=> {
      item.classList.add("btn-green-transparent")
      item.children[0].classList.add("fas")
      item.children[0].classList.add("fa-check")
      item.children[1].innerHTML= 'Tips Submitted'                                 
    })


  }

  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    shouldSwiperUpdate: true,
    observer: true,
    observeParents: true,
    centeredSlides: true,
    noSwiping: true,
  }

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    shouldSwiperUpdate: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-next.swiper-btn',
      prevEl: '.swiper-button-prev.swiper-btn',
    },
  }

  const westGallerySwiperParams = {
    getSwiper: getWestGallerySwiper,
    spaceBetween: 10,
    shouldSwiperUpdate: true,
    observer: true,
    observeParents: true,
    centeredSlides: true,
    noSwiping: true,
  }

  const westThumbnailSwiperParams = {
    getSwiper: getWestThumbnailSwiper,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    shouldSwiperUpdate: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-next.swiper-btn',
      prevEl: '.swiper-button-prev.swiper-btn',
    },
  }

  useEffect(() => {
    if ( gallerySwiper !== null && gallerySwiper.controller && thumbnailSwiper !== null &&  thumbnailSwiper.controller ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }

    if ( westGallerySwiper !== null && westGallerySwiper.controller && westThumbnailSwiper !== null && westThumbnailSwiper.controller ) {
      westGallerySwiper.controller.control = westThumbnailSwiper;
      westThumbnailSwiper.controller.control = westGallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper, westGallerySwiper, westThumbnailSwiper])

  return(
    <>
      <div className="tipping-accordion">
        <h5 className="t-section-title c-black">In-game Tipping Competitions</h5>
        <div className="tipping-accordion-holder">
          <div className="accordion-holder">
            <Accordion preExpanded="0">
              {
                content.map((itemAcordion, i)=> {
                  const parentRoot = i
                  return(
                    <AccordionItem key={i} uuid={i.toString()}>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <h5 className="t-section-title c-white t-acordion-title">{itemAcordion.accordionTitle}</h5>
                          <span className="fas fa-angle-down c-white i-accordion-arrow"></span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <Swiper {...(i === 0 ? thumbnailSwiperParams : westThumbnailSwiperParams)}>
                          {
                            itemAcordion.swiperTabs.map((gameGroup, j) => {
                              return (
                                <div key={j}>
                                  <h5 className="t-h5 t-thumb-title">{gameGroup.swiperTitle}</h5>
                                </div>
                              )
                            })
                          }
                        </Swiper>
                        <Swiper {...(i === 0 ? gallerySwiperParams : westGallerySwiperParams)}>
                          {
                            itemAcordion.swiperTabs.map((gameGroup, k) => {
                              const swiperId = k
                              // const handleSubmit = () => {
                                
                              // }
                              return(
                                <form id={`c${parentRoot}-${swiperId}`} className="event-content" key={k} onSubmit={handleFormSubmit}>
                                  {
                                    gameGroup.swiperContent.map((gameEvents, l) => {
                                      return(
                                        <div className="event" key={l}>
                                          <div className={`event-wrapper c0-${l}`}>
                                            <span className="t-paragraph day-holder c-black">{gameEvents.dayVal} </span>
                                            <span className="t-paragraph date-holder c-periwinkle">{gameEvents.dateVal} </span>
                                            <span className="separator c-periwinkle">| </span>
                                            <span className="t-paragraph place-holder c-periwinkle">{gameEvents.placeVal}</span>
                                          </div>
                                          <div className="game-wrapper">
                                            <InGame 
                                              game={gameEvents.gameList} 
                                              accordionId={itemAcordion.accordionId}
                                              swiperTabId={gameGroup.swiperTabId}
                                              eventId={gameEvents.eventId}
                                              handleTeamSelect={handleTeamSelect}
                                              x={`c${parentRoot}-${swiperId}-${l}`}
                                            />
                                          </div>
                                        </div>
                                      )
                                    })
                                  }
                                  <div className="action-holder">
                                      <button 
                                        type="submit"
                                        id={gameGroup.swiperTabId}
                                        className={classnames("btn-action", {
                                          "btn-action-abled" : gameGroup.submittable,
                                        })}
                                        disabled={!gameGroup.submittable}
                                        // onClick={handleSubmit}
                                        >
                                        <span></span>
                                        <span>Submit Tips</span>
                                      </button>
                                  </div>
                                </form>
                              )
                            })
                          }
                        </Swiper>
                      </AccordionItemPanel>
                    </AccordionItem>
                  )
                })
              }
            </Accordion>
          </div>
          <div className="ads-wrapper">
            <Link to="/">
              <img src={adsImg.adsImage} className="img ads-image" alt="ads" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default TippingAccordion
