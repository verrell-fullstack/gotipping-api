import React, { useState } from 'react'
import classnames from 'classnames'

import CardList from '../components/CardList'
import FeaturedCard from '../components/FeaturedCard'
import SubHeaderPills from '../components/SubHeaderPills'

import '../stylesheets/main.scss'

const featuredContent={
  url: 'https://www.youtube.com/embed/ScMzIvxBSi4',
  title: 'Featured News Title Goes Here',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  imageButton: [
    {
      image: require('../assets/images/button-img1.jpg'),
      text: 'NBA Association',
    },
    {
      image: require('../assets/images/button-img2.jpg'),
      text: 'Nike',
    }
  ]
}

const cardListTrending={
  title: "Trending News",
  allList: [
    {
      image: require('../assets/images/trending-img.jpg'),
      alt: 'Basketball',
      title: 'News Title Goes Here',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      author: 'Nba Association',
      date: 'July 25 2019',
      btnName: 'Read More'
    },
    {
      image: require('../assets/images/trending-img.jpg'),
      alt: 'Basketball',
      title: 'News Title Goes Here',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      author: 'Nba Association',
      date: 'July 25 2019',
      btnName: 'Read More'
    },
    {
      image: require('../assets/images/trending-img.jpg'),
      alt: 'Basketball',
      title: 'News Title Goes Here',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      author: 'Nba Association',
      date: 'July 25 2019',
      btnName: 'Read More'
    },
    {
      image: require('../assets/images/trending-img.jpg'),
      alt: 'Basketball',
      title: 'News Title Goes Here',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      author: 'Nba Association',
      date: 'July 25 2019',
      btnName: 'Read More'
    }
  ],
  directionRow: false,
  hasLoadMore: false,
  adsImage: require('../assets/images/trending-ads-img.jpg')
}

const subheaderTabs = {
  carouselShow: false,
}

function NewsTab({btnToggle, userLogged, content}) {
  const [recommendedPosts, setRecommendedPosts] = useState({
    title: "Recommended News",
    allList: [
      {
        image: require('../assets/images/recommend-1.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Read More'
      },
      {
        image: require('../assets/images/recommend-2.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Read More'
      },
      {
        image: require('../assets/images/recommend-3.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Read More'
      },
      {
        image: require('../assets/images/recommend-4.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Read More'
      },
      {
        image: require('../assets/images/recommend-5.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Read More'
      },
      {
        image: require('../assets/images/recommend-6.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Read More'
      },
      {
        image: require('../assets/images/recommend-7.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Read More'
      },
      {
        image: require('../assets/images/recommend-8.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Read More'
      },
      {
        image: require('../assets/images/recommend-9.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Read More'
      },
    ],
    directionRow: true,
    hasLoadMore: true,
    btnName: 'Load More',
    adsImage: require('../assets/images/tipping-ads.jpg')
  })

  const handleLoadMoreRecommended = () => {
    const incomingPosts = [
      {
        image: require('../assets/images/recommend-1.jpg'),
        alt: 'Basketball',
        title: 'Incoming - News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Read More'
      },
      {
        image: require('../assets/images/recommend-2.jpg'),
        alt: 'Basketball',
        title: 'Incoming - News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Read More'
      },
      {
        image: require('../assets/images/recommend-3.jpg'),
        alt: 'Basketball',
        title: 'Incoming - News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Read More'
      },
      {
        image: require('../assets/images/recommend-4.jpg'),
        alt: 'Basketball',
        title: 'Incoming - News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Read More'
      },
      {
        image: require('../assets/images/recommend-5.jpg'),
        alt: 'Basketball',
        title: 'Incoming - News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Read More'
      },
      {
        image: require('../assets/images/recommend-6.jpg'),
        alt: 'Basketball',
        title: 'Incoming - News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Read More'
      }
    ];

    const currentAllList = [ ...recommendedPosts.allList ];

    setRecommendedPosts({
      ...recommendedPosts,
      allList: [
        ...currentAllList,
        ...incomingPosts
      ]
    })
  }

  return(
    <>
      {/* <main className={classnames("dashboard user-logged-content", {
        "content-collapsed": !btnToggle,
        // "user-logged": userLogged,
        "user-logged": true
      })}> */}
        {/* <SubHeaderPills 
          subheader={content[1]}
          subheaderTabs={subheaderTabs}
        /> */}
        <div className="dashboard-wrapper">
          <FeaturedCard
            content={featuredContent}
          />
          <div className="section-trending">
            <CardList
              content={cardListTrending}
            />
          </div>
          <div className="section-recommended">
            <CardList
              content={recommendedPosts}
              loadMoreData={handleLoadMoreRecommended}
            />
          </div>
        </div>
      {/* </main> */}
    </>
  )
}

export default NewsTab
