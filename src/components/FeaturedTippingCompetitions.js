import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function FeaturedTippingCompetitions({ content }) {
  return (
    content.carouselImg.map((item, i) => {
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
            <Carousel.Item>
              <img src={item.carouselItemFirst} className="d-block carousel-img" alt="Rise to the Challange"/>
            </Carousel.Item>
          </Carousel>
        </div>
      )
    })
  )
}

export default FeaturedTippingCompetitions
