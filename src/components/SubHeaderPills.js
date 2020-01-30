import React from 'react'
import { NavLink } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

function SubHeaderPills({ subheader, subheaderTabs }) {
  return(
    <>
      <div className="subheader-pills subheader-pills-main">
        <div className="subheader-pills-wrapper">
          <div className="subheader-pills-holder">
            <div className="sidebar-item">
              <div className="icon-holder">
                <span className={subheader.iconClass}>{subheader.icon}</span>
              </div>
              <div className="label-holder">
                <p className="t-paragraph c-periwinkle label">{subheader.label}</p>
              </div>
            </div>
          {/* {
            subheader.map((item, i) => {
              if(item.label === 'Basketball')
              return(
                <div key={i} className="sidebar-item">
                  <div className="icon-holder">
                    <span className={item.iconClass}>{item.icon}</span>
                  </div>
                  <div className="label-holder">
                    <p className="t-paragraph c-periwinkle label">{item.label}</p>
                  </div>
                </div>
              )
            })
          } */}
        </div>
          <div className="subheader-pills-search">
            <input className="form-search" placeholder="Search for competitions.."/>
            <i className="fas fa-search search-icon"></i>
          </div>
        </div>
      </div>

      
      <div className="subheader-pills">
        <div className="subheader-pills-tabs">
          <div className="links-holder">
            <div className="links-item">
              <NavLink to="/all-tab" className="links-holder-item">All</NavLink>
            </div>
            <div className="links-item">
              <NavLink to="/tipping-competitions" className="links-holder-item">Tipping Competitions</NavLink>
            </div>
            <div className="links-item">
              <NavLink to="/news-tab" className="links-holder-item" activeClassName="active">News</NavLink>
            </div>
            <div className="links-item">
              <NavLink to="/video-tab" className="links-holder-item">Videos</NavLink>
            </div>
            <div className="links-item">
              <NavLink to="#" className="links-holder-item">Statistics</NavLink>
            </div>
          </div>
          {
            subheaderTabs.carouselShow ? 
            subheaderTabs.carouselImg.map((item, i) => {
              return (
                <div key={i} className="carousel-wrapper">
                  <Carousel touch={true}>
                    <Carousel.Item>
                      <img src={item.carouselItemFirst} className="d-block carousel-img" alt="Rise to the Challange"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={item.carouselItemFirst} className="d-block carousel-img" alt="Rise to the Challange"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={item.carouselItemFirst} className="d-block carousel-img" alt="Rise to the Challange"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={item.carouselItemFirst} className="d-block carousel-img" alt="Rise to the Challange"/>
                    </Carousel.Item>
                  </Carousel>
                </div>
              )
            })
            : 
            ''
          }
        </div>
      </div>
      
    </>
  )
}

export default SubHeaderPills
