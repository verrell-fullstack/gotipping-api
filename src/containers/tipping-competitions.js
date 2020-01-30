import React, { useState } from 'react'
import classnames from 'classnames'

import CardList from '../components/CardList'
import SubHeaderPills from '../components/SubHeaderPills'
import Accordion from '../components/Accordion'

import '../stylesheets/main.scss'

const subheaderTabs = {
  carouselShow: true,
  carouselImg: [
    {
      carouselItemFirst: require('../assets/images/tipping-banner-1.png'),
      carouselItemSecond: require('../assets/images/tipping-banner-1.png'),
      carouselItemThird: require('../assets/images/tipping-banner-1.png'),
      carouselItemFourth: require('../assets/images/tipping-banner-1.png')
    }
  ]
}

const tippingContent = [
  {
    accordionId: "accordion-1",
    accordionTitle: "Nba Tipping competition",
    swiperTabs: [
      {
        swiperTabId: "round-29",
        swiperTitle: "Round 29",
        submittable: false,
        swiperContent: [
          {
            eventId: "day-1",
            dayVal: "Today",
            dateVal: "02 Aug 2019",
            placeVal: "Sacramento, California USA.",
            gameList: [
              {
                gameId: "game-01",
                gameTitle: "Nba game 01",
                gameTime: "starts at 07:00 AM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt1",
                hasSelected: false,
                selectedTeam: false
              }
            ]
          },
          {
            eventId: "day-2",
            dayVal: "Tuesday",
            dateVal: "03 Aug 2019",
            placeVal: "Houston, Texas USA.",
            gameList: [
              {
                gameId: "game-2",
                gameTitle: "Nba game 02",
                gameTime: "starts at 10:00 AM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt2",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-3",
                gameTitle: "Nba game 03",
                gameTime: "starts at 12:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt3",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-4",
                gameTitle: "Nba game 04",
                gameTime: "starts at 03:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt4",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-5",
                gameTitle: "Nba game 05",
                gameTime: "starts at 05:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt5",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-6",
                gameTitle: "Nba game 06",
                gameTime: "starts at 08:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt6",
                hasSelected: false,
                selectedTeam: false
              }
            ]
          },
          {
            eventId: "day-3",
            dayVal: "Wednesday",
            dateVal: "04 Aug 2019",
            placeVal: "Newyork, Nework USA.",
            gameList: [
              {
                gameId: "game-7",
                gameTitle: "Nba game 07",
                gameTime: "starts at 08:00 AM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt7",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-8",
                gameTitle: "Nba game 08",
                gameTime: "starts at 10:00 AM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt8",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-9",
                gameTitle: "Nba game 09",
                gameTime: "starts at 12:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt9",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-10",
                gameTitle: "Nba game 10",
                gameTime: "starts at 03:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt10",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-11",
                gameTitle: "Nba game 11",
                gameTime: "starts at 05:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt11",
                hasSelected: false,
                selectedTeam: false
              }
            ]
          }
        ],
        btnNameValue: "Submit Tips"
      },
      {
        swiperTabId: "semi-finals",
        swiperTitle: "NBA Semi-Finals",
        submittable: false,
        swiperContent: [
          {
            eventId: "day-1",
            dayVal: "Today",
            dateVal: "02 Aug 2019",
            placeVal: "Sacramento, California USA.",
            gameList: [
              {
                gameId: "game-1",
                gameTitle: "Nba game 01",
                gameTime: "starts at 07:00 AM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt1",
                hasSelected: false,
                selectedTeam: false
              }
            ]
          },
          {
            eventId: "day-2",
            dayVal: "Tuesday",
            dateVal: "03 Aug 2019",
            placeVal: "Houston, Texas USA.",
            gameList: [
              {
                gameId: "game-2",
                gameTitle: "Nba game 02",
                gameTime: "starts at 10:00 AM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt2",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-3",
                gameTitle: "Nba game 03",
                gameTime: "starts at 12:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt3",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-4",
                gameTitle: "Nba game 04",
                gameTime: "starts at 03:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt4",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-5",
                gameTitle: "Nba game 05",
                gameTime: "starts at 05:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt5",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-6",
                gameTitle: "Nba game 06",
                gameTime: "starts at 08:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt6",
                hasSelected: false,
                selectedTeam: false
              }
            ]
          }
        ],
        btnNameValue: "Submit Tips"
      },
      {
        swiperTabId: "nba-finals",
        swiperTitle: "NBA Finals",
        submittable: false,
        swiperContent: [
          {
            eventId: "day-2",
            dayVal: "Tuesday",
            dateVal: "03 Aug 2019",
            placeVal: "Houston, Texas USA.",
            gameList: [
              {
                gameId: "game-2",
                gameTitle: "Nba game 02",
                gameTime: "starts at 10:00 AM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt2",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-3",
                gameTitle: "Nba game 03",
                gameTime: "starts at 12:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt3",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-4",
                gameTitle: "Nba game 04",
                gameTime: "starts at 03:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt4",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-5",
                gameTitle: "Nba game 05",
                gameTime: "starts at 05:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt5",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-6",
                gameTitle: "Nba game 06",
                gameTime: "starts at 08:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt6",
                hasSelected: false,
                selectedTeam: false
              }
            ]
          },
          {
            eventId: "day-3",
            dayVal: "Wednesday",
            dateVal: "04 Aug 2019",
            placeVal: "Newyork, Nework USA.",
            gameList: [
              {
                gameId: "game-7",
                gameTitle: "Nba game 07",
                gameTime: "starts at 08:00 AM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt7",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-8",
                gameTitle: "Nba game 08",
                gameTime: "starts at 10:00 AM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt8",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-9",
                gameTitle: "Nba game 09",
                gameTime: "starts at 12:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt9",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-10",
                gameTitle: "Nba game 10",
                gameTime: "starts at 03:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt10",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-11",
                gameTitle: "Nba game 11",
                gameTime: "starts at 05:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt11",
                hasSelected: false,
                selectedTeam: false
              }
            ]
          }
        ],
        btnNameValue: "Submit Tips"
      }
    ]
  },
  {
    accordionId: "accordion-2",
    accordionTitle: "East Tipping Competition",
    swiperTabs: [
      {
        swiperTabId: "round-29-2",
        swiperTitle: "Round 29",
        submittable: false,
        swiperContent: [
          {
            eventId: "day-1-2",
            dayVal: "Today",
            dateVal: "02 Aug 2019",
            placeVal: "Sacramento, California USA.",
            gameList: [
              {
                gameId: "game-1-2",
                gameTitle: "Nba game 01",
                gameTime: "starts at 07:00 AM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                hasSelected: false,
                selectedTeam: false
              }
            ]
          },
          {
            eventId: "day-2-2",
            dayVal: "Tuesday",
            dateVal: "03 Aug 2019",
            placeVal: "Houston, Texas USA.",
            gameList: [
              {
                gameId: "game-2-2",
                gameTitle: "Nba game 02",
                gameTime: "starts at 10:00 AM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-3-2",
                gameTitle: "Nba game 03",
                gameTime: "starts at 12:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt3",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-4-2",
                gameTitle: "Nba game 04",
                gameTime: "starts at 03:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt4",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-5-2",
                gameTitle: "Nba game 05",
                gameTime: "starts at 05:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt5",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-6-2",
                gameTitle: "Nba game 06",
                gameTime: "starts at 08:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt6",
                hasSelected: false,
                selectedTeam: false
              }
            ]
          },
          {
            eventId: "day-3-2",
            dayVal: "Wednesday",
            dateVal: "04 Aug 2019",
            placeVal: "Newyork, Nework USA.",
            gameList: [
              {
                gameId: "game-7-2",
                gameTitle: "Nba game 07",
                gameTime: "starts at 08:00 AM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt7",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-8-2",
                gameTitle: "Nba game 08",
                gameTime: "starts at 10:00 AM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt8",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-9-2",
                gameTitle: "Nba game 09",
                gameTime: "starts at 12:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt9",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-10-2",
                gameTitle: "Nba game 10",
                gameTime: "starts at 03:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt10",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-11-2",
                gameTitle: "Nba game 11",
                gameTime: "starts at 05:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt11",
                hasSelected: false,
                selectedTeam: false
              }
            ]
          }
        ],
        btnNameValue: "Submit Tips"
      },
      {
        swiperTabId: "semi-finals-2",
        swiperTitle: "NBA Semi-Finals",
        submittable: false,
        swiperContent: [
          {
            eventId: "day-1-2",
            dayVal: "Today",
            dateVal: "02 Aug 2019",
            placeVal: "Sacramento, California USA.",
            gameList: [
              {
                gameId: "game-1-2",
                gameTitle: "Nba game 01",
                gameTime: "starts at 07:00 AM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt1",
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-2-2",
                gameTitle: "Nba game 01",
                gameTime: "starts at 07:00 AM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                idValue: "ntp-opt1",
                hasSelected: false,
                selectedTeam: false
              }
            ]
          },
          {
            eventId: "day-2-2",
            dayVal: "Tuesday",
            dateVal: "03 Aug 2019",
            placeVal: "Houston, Texas USA.",
            gameList: [
              {
                gameId: "game-2-2",
                gameTitle: "Nba game 02",
                gameTime: "starts at 10:00 AM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-3-2",
                gameTitle: "Nba game 03",
                gameTime: "starts at 12:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-4-2",
                gameTitle: "Nba game 04",
                gameTime: "starts at 03:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                hasSelected: false,
                selectedTeam: false
              },
            ]
          }
        ],
        btnNameValue: "Submit Tips"
      },
      {
        swiperTabId: "nba-finals-2",
        swiperTitle: "NBA Finals",
        submittable: false,
        swiperContent: [
          {
            eventId: "day-2-2",
            dayVal: "Tuesday",
            dateVal: "03 Aug 2019",
            placeVal: "Houston, Texas USA.",
            gameList: [
              {
                gameId: "game-2-2",
                gameTitle: "Nba game 02",
                gameTime: "starts at 10:00 AM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-3-2",
                gameTitle: "Nba game 03",
                gameTime: "starts at 12:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-4-2",
                gameTitle: "Nba game 04",
                gameTime: "starts at 03:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-5-2",
                gameTitle: "Nba game 05",
                gameTime: "starts at 05:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                hasSelected: false,
                selectedTeam: false
              },
              {
                gameId: "game-6-2",
                gameTitle: "Nba game 06",
                gameTime: "starts at 08:00 PM",
                teamAName: "Miami Heat Jersey",
                teamAAcronym: "MIA",
                teamABet: "2.0",
                teamAImage: require('../assets/images/bet-img1.png'),
                teamBName: "New York Knicks",
                teamBAcronym: "NYK",
                teamBBet: "1.25",
                teamBImage: require('../assets/images/bet-img2.png'),
                hasSelected: false,
                selectedTeam: false
              }
            ]
          },
        ],
        btnNameValue: "Submit Tips"
      }
    ]
  },
]

const tippingCompetitionAds = {
  adsImage: require('../assets/images/trending-ads-img.jpg')
}

function TippingCompetitions({btnToggle, userLogged, content}) {
  const [tippings, setTipping] = useState([...tippingContent]);
  const [latestTippingPosts, setlatestTippingPosts] = useState({
    title: "Latest Tipping Competition",
    allList: [
      {
        image: require('../assets/images/tipping-img1.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Join Tipping Competition'
      },
      {
        image: require('../assets/images/tipping-img2.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Join Tipping Competition'
      },
      {
        image: require('../assets/images/tipping-img3.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Join Tipping Competition'
      },
      {
        image: require('../assets/images/tipping-img4.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Join Tipping Competition'
      },
      {
        image: require('../assets/images/tipping-img5.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Join Tipping Competition'
      },
      {
        image: require('../assets/images/tipping-img6.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Join Tipping Competition'
      },
      {
        image: require('../assets/images/tipping-img7.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Join Tipping Competition'
      },
      {
        image: require('../assets/images/tipping-img8.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Join Tipping Competition'
      },
      {
        image: require('../assets/images/tipping-img9.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Join Tipping Competition'
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
        image: require('../assets/images/tipping-img1.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Join Tipping Competition'
      },
      {
        image: require('../assets/images/tipping-img2.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Join Tipping Competition'
      },
      {
        image: require('../assets/images/tipping-img3.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Join Tipping Competition'
      },
      {
        image: require('../assets/images/tipping-img4.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Join Tipping Competition'
      },
      {
        image: require('../assets/images/tipping-img5.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Join Tipping Competition'
      },
      {
        image: require('../assets/images/tipping-img6.jpg'),
        alt: 'Basketball',
        title: 'News Title Goes Here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et',
        author: 'Nba Association',
        date: 'July 25 2019',
        btnName: 'Join Tipping Competition'
      },
    ];

    const currentAllList = [ ...latestTippingPosts.allList ];

    setlatestTippingPosts({
      ...latestTippingPosts,
      allList: [
        ...currentAllList,
        ...incomingPosts
      ]
    })
  }

  const handleTeamSelect = ({
    target,
    accordionId,
    swiperTabId,
    eventId,
    gameId
  }) => {
    const newTipping = tippings.map(tipping => {
      if (tipping.accordionId === accordionId) {
        const newSwiperTabs = tipping.swiperTabs.map(swiperTab => {
          if (swiperTab.swiperTabId === swiperTabId) {
            const newSwiperContent = swiperTab.swiperContent.map(
              swiperContent => {
                if (swiperContent.eventId === eventId) {
                  const newGameList = swiperContent.gameList.map(game => {
                    if (game.gameId === gameId) {
                      game.hasSelected = true;
                      game.selectedTeam = target.value;
                    }

                    return game;
                  });

                  const allGamesOfTarget = swiperTab.swiperContent.map(
                    ({ gameList }) => {
                      return gameList
                        .map(game => game.hasSelected)
                        .every(game => game);
                    }
                  );

                  const isSwiperSubmittable = allGamesOfTarget.every(
                    day => day === true
                  );
                  swiperTab.submittable = isSwiperSubmittable;

                  return {
                    ...swiperContent,
                    gameList: newGameList
                  };
                } else {
                  return swiperContent;
                }
              }
            );

            return {
              ...swiperTab,
              swiperContent: newSwiperContent
            };
          } else {
            return swiperTab;
          }
        });

        return {
          ...tipping,
          swiperTabs: newSwiperTabs
        };
      } else {
        return tipping;
      }
    });

    setTipping([...newTipping]);
    
    console.log(
      target.value,
      accordionId,
      swiperTabId,
      gameId,
      eventId)
  };

  

  return(
    <>
      <Accordion 
        handleTeamSelect={handleTeamSelect}
        content={tippings}
        adsImg={tippingCompetitionAds}
      />

      <div className="dashboard-wrapper">
        <div className="section-recommended">
          <CardList
            content={latestTippingPosts}
            loadMoreData={handleLoadMoreRecommended}
          />
        </div>
      </div>
    </>
  )
}

export default TippingCompetitions



{/* <main className={classnames("dashboard user-logged-content tipping-competition", {
        "content-collapsed": !btnToggle,
        // "user-logged": userLogged
        "user-logged": true
      })}> */}

        {/* <SubHeaderPills 
          subheader={content[1]}
          subheaderTabs={subheaderTabs}
        /> */}
      //   <Accordion 
      //     handleTeamSelect={handleTeamSelect}
      //     content={tippings}
      //     adsImg={tippingCompetitionAds}
      //   />

      //   <div className="dashboard-wrapper">
      //     <div className="section-recommended">
      //       <CardList
      //         content={latestTippingPosts}
      //         loadMoreData={handleLoadMoreRecommended}
      //       />
      //     </div>
      //   </div>
      // </main>