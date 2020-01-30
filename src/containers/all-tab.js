import React from 'react'
import classnames from 'classnames'

import SubHeaderPills from '../components/SubHeaderPills'
import PanelTabContent from '../components/PanelTabContent'
import NewsVideo from '../components/NewsVideo'
import Carousel from '../components/FeaturedTippingCompetitions'
import StatList from '../components/StatList'
import InGameSummary from '../components/InGameSummary'

import '../stylesheets/main.scss'

const tippingCompetitionSummary = {
  allList: [
    {
      accordionTitle: 'Nba tipping Competition',
      accordionRoundGame: 'Semi-Finals',
      teamAName: 'Miami Heat Jersey',
      teamAAcronym: 'MIA',
      teamABet: '2.0',
      teamAImage: require('../assets/images/bet-img1.png'),
      teamBName: 'New York Knicks' ,
      teamBAcronym: 'NYK',
      teamBBet: '1.25',
      teamBImage: require('../assets/images/bet-img2.png'),
      idValue: 'ntp-opt1'
    },
    {
      accordionTitle: 'East Tipping Competition',
      accordionRoundGame: 'East Game 05',
      teamAName: 'Miami Heat Jersey',
      teamAAcronym: 'MIA',
      teamABet: '2.0',
      teamAImage: require('../assets/images/bet-img1.png'),
      teamBName: 'New York Knicks' ,
      teamBAcronym: 'NYK',
      teamBBet: '1.25',
      teamBImage: require('../assets/images/bet-img2.png'),
      idValue: 'ntp-opt2'
    },
    {
      accordionTitle: 'West Tipping Competition',
      accordionRoundGame: 'West Game 09',
      teamAName: 'Miami Heat Jersey',
      teamAAcronym: 'MIA',
      teamABet: '2.0',
      teamAImage: require('../assets/images/bet-img1.png'),
      teamBName: 'New York Knicks' ,
      teamBAcronym: 'NYK',
      teamBBet: '1.25',
      teamBImage: require('../assets/images/bet-img2.png'),
      idValue: 'ntp-opt3'
    },
    {
      accordionTitle: 'PBA Tipping Competition',
      accordionRoundGame: 'PBA Game 11',
      teamAName: 'Miami Heat Jersey',
      teamAAcronym: 'MIA',
      teamABet: '2.0',
      teamAImage: require('../assets/images/bet-img1.png'),
      teamBName: 'New York Knicks' ,
      teamBAcronym: 'NYK',
      teamBBet: '1.25',
      teamBImage: require('../assets/images/bet-img2.png'),
      idValue: 'ntp-opt4'
    },
    {
      accordionTitle: 'Asia Tipping Competition',
      accordionRoundGame: 'PBA Game 11',
      teamAName: 'Miami Heat Jersey',
      teamAAcronym: 'MIA',
      teamABet: '2.0',
      teamAImage: require('../assets/images/bet-img1.png'),
      teamBName: 'New York Knicks' ,
      teamBAcronym: 'NYK',
      teamBBet: '1.25',
      teamBImage: require('../assets/images/bet-img2.png'),
      idValue: 'ntp-opt5'
    },
  ]
}

const tippingCompetitions = {
  carouselImg: [
    {
      carouselItemFirst: require('../assets/images/featured-competitions.jpg'),
      carouselItemSecond: require('../assets/images/featured-competitions.jpg'),
      carouselItemThird: require('../assets/images/featured-competitions.jpg'),
      carouselItemFourth: require('../assets/images/featured-competitions.jpg'),
      carouselItemFifth: require('../assets/images/featured-competitions.jpg')
    }
  ]
}

const newsList = {
  allList: [
    {
      title: 'NBA FINALS',
      day: 'Today',
      time: '8:25 pm',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam consequat.',
      video: false,
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
    },
    {
      title: 'NBA FINALS',
      day: 'Today',
      time: '8:25 pm',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam consequat.',
      video: false,
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
  ]
}

const videoList = {
  allList: [
    {
      url: 'https://www.youtube.com/embed/ScMzIvxBSi4',
      alt: 'Basketball',
      title: 'NBA FINALS',
      day: 'Today',
      time: '8:25 pm',
      desc: "Check out the new release Nike Roshe Run 2.0! Run, Don't Hide! Click on the video to earn up to 30% off and more!",
      video: true,
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
    },
    {
      url: 'https://www.youtube.com/embed/ScMzIvxBSi4',
      alt: 'Basketball',
      title: 'NBA FINALS',
      day: 'Today',
      time: '8:25 pm',
      desc: "Jordan 1's Black toe Re issue 2019 Release! Be one of the lucky collectors to have hands on the legendary J's!",
      video: true,
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
    },
  ]
}

const statsList = {
  allList: [
    {
      previewsRank: 36,
      rank: 35,
      image: require('../assets/images/miami-logo.jpg'),
      name: 'Miami Heat',
      nameAcronym: 'MIA',
      previewsFirstStat: -3.5,
      firstStat: -2.5,
      previewsSecondStat: -3.5,
      secondStat: -1.6,
      previewsThirdStat: -8.2,
      thirdStat: -7.2,
      bets: '-77',
    },
    {
      previewsRank: 33,
      rank: 34,
      image: require('../assets/images/okc-logo.jpg'),
      name: 'Oklahoma city',
      nameAcronym: 'OKC',
      previewsFirstStat: +3.5,
      firstStat: +2.5,
      previewsSecondStat: -3.5,
      secondStat: -1.2,
      previewsThirdStat: +8.2,
      thirdStat: +7.2,
      bets: '+23',
    }
  ]
}

const panelContent = {
  adsImage: require('../assets/images/playoffs-ads.jpg'),
  adsImage2: require('../assets/images/nike-ads.jpg'),
  allList: [
    { 
      title: 'In-Game Tipping Competition',
      url: '/tipping-competitions',
      tabIndex: '2',
      content: <InGameSummary content={tippingCompetitionSummary} />,
    },
    { 
      title: 'Featured Tipping Competitions',
      url: '/',
      tabIndex: '1',
      content: <Carousel content={tippingCompetitions} />
    },
    { 
      title: 'News Feed',
      url: '/news-tab',
      tabIndex: '3',
      content: <NewsVideo content={newsList} 
      />,
    },
    { 
      title: 'Videos',
      url: '/video-tab',
      tabIndex: '4',
      content: <NewsVideo content={videoList} />,
    },
    { 
      title: 'Statistics',
      url: '/',
      tabIndex: '5',
      content: <StatList content={statsList} />
    },
  ],
}

const subheaderTabs = {
  carouselShow: false,
}

function AllTab({btnToggle, userLogged, content, toggleBtn}) {
  return(
    <>
      <div className="dashboard-wrapper">
        <PanelTabContent
          content={panelContent}
          toggleBtn={toggleBtn}
        />
      </div>
    </>
  )
}

export default AllTab


{/* <main className={classnames("dashboard user-logged-content all-tab", {
        "content-collapsed": !btnToggle,
        "user-logged": true
      })}> */}
        {/* <SubHeaderPills 
          subheader={content[1]}
          subheaderTabs={subheaderTabs}
        /> */}
      //   <div className="dashboard-wrapper">
      //     <PanelTabContent
      //       content={panelContent}
      //       toggleBtn={toggleBtn}
      //     />
      //   </div>
      // </main>