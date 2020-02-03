import React, { useState, useRef } from 'react'
import useReactRouter from 'use-react-router';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import Header from '../components/Header'

import Sidebar from '../components/Sidebar'
import SubHeaderPills from '../components/SubHeaderPills'

import { ReactComponent as TopGames } from '../assets/svg/sidebar-top-games.svg'
import { ReactComponent as Basketball } from '../assets/svg/sidebar-basketball.svg'
import { ReactComponent as Football } from '../assets/svg/sidebar-football.svg'
import { ReactComponent as Tennis } from '../assets/svg/sidebar-tennis.svg'
import { ReactComponent as Volleyball } from '../assets/svg/sidebar-volleyball.svg'
import { ReactComponent as Cricket } from '../assets/svg/sidebar-cricket.svg'
import { ReactComponent as Rugby } from '../assets/svg/sidebar-rugby.svg'
import { ReactComponent as Boxing } from '../assets/svg/sidebar-boxing.svg'
import { ReactComponent as Badminton } from '../assets/svg/sidebar-badminton.svg'
import { ReactComponent as Esports } from '../assets/svg/sidebar-esports.svg'
import { ReactComponent as MotoSport } from '../assets/svg/sidebar-moto-sport.svg'

import AllTab from './all-tab';
import NewsTab from './news-tab'
import TippingAccordion from './tipping-competitions'
import VideoTab from './video-tab'

const sideBarList = [
  {
    icon: <TopGames />,
    iconClass: "icon icon-all",
    label: 'Top Games',
    quantity: '11'
  },
  {
    icon: <Basketball />,
    iconClass: "icon icon-basketball",
    label: 'Basketball',
    quantity: '1'
  },
  {
    icon: <Football />,
    iconClass: "icon icon-football",
    label: 'Football',
    quantity: '2'
  },
  {
    icon: <Tennis />,
    iconClass: "icon icon-tennis",
    label: 'Tennis',
    quantity: '0'
  },
  {
    icon: <Volleyball />,
    iconClass: "icon icon-volleyball",
    label: 'Volleyball',
    quantity: '3'
  },
  {
    icon: <Cricket />,
    iconClass: "icon icon-cricket",
    label: 'Cricket',
    quantity: '11'
  },
  {
    icon: <Rugby />,
    iconClass: "icon icon-rugby",
    label: 'Rugby',
    quantity: '2'
  },
  {
    icon: <Boxing />,
    iconClass: "icon icon-boxing",
    label: 'Boxing',
    quantity: '0'
  },
  {
    icon: <Badminton />,
    iconClass: "icon icon-badminton",
    label: 'Badminton',
    quantity: '11'
  },
  {
    icon: <Esports />,
    iconClass: "icon icon-esports",
    label: 'Esports',
    quantity: '3'
  },
  {
    icon: <MotoSport />,
    iconClass: "icon icon-motosport",
    label: 'Moto Sport',
    quantity: '1'
  },
]

const subheaderTabs = {
  carouselShow: false,
}

function dashboard({props, userID, reference}) {

  const [activeTab, setActiveTab] = useState('1');
  const [loginOpen, setLoginOpen] = useState(false)
  const [btnToggle, setBtnToggle] = useState(false)

  // const toggle = tab => {
  //   if(activeTab !== tab) setActiveTab(tab);
  // }


  const { history } = useReactRouter()

  function toggle(tab) {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (    
    <main className={classnames("dashboard", {
        "content-collapsed": !btnToggle,
      })}>
        <Header
          reference={reference}
          btnToggle={btnToggle}
          setBtnToggle={setBtnToggle}
          // userLogged={userLogged}
          // setuserLogged={setuserLogge
          loginOpen={loginOpen}
          // useHistory={useHistory}
          setLoginOpen={setLoginOpen}
          isDashboard={true}
        />
        <Sidebar
          content={sideBarList}
          btnToggle={btnToggle}
          // userLogged={userLogged}
        />
  
        {/* <SubHeaderPills 
          subheader={sideBarList}
          subheaderTabs={subheaderTabs}
        /> */}
  
        <div className="subheader-pills subheader-pills-main">
          <div className="subheader-pills-wrapper">
            <div className="subheader-pills-holder">
              {/* <div className="sidebar-item">
                <div className="icon-holder">
                  <span className={sideBarList.iconClass}>{sideBarList.icon}</span>
                </div>
                <div className="label-holder">
                  <p className="t-paragraph c-periwinkle label">{sideBarList.label}</p>
                </div>
              </div> */}
            {
              sideBarList.map((item, i) => {
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
            }
          </div>
            <div className="subheader-pills-search">
              <input className="form-search" placeholder="Search for competitions.."/>
              <i className="fas fa-search search-icon"></i>
            </div>
          </div>
        </div>
  
        <div className="subheader-pills">
          <div className="subheader-pills-tabs">
            <Nav tabs className="links-holder">
              <div className="links-item">
                <div
                  className={classnames('links-holder-item', { active: activeTab === '1' })}
                  onClick={() => { toggle('1'); }}
                >
                  All
                </div>
              </div>
  
              <div>
                <div
                  className={classnames('links-holder-item', { active: activeTab === '2' })}
                  onClick={() => { toggle('2'); }}
                >
                  Tipping Competitions
                </div>
              </div>
  
              <div>
                <div
                  className={classnames('links-holder-item', { active: activeTab === '3' })}
                  onClick={() => { toggle('3'); }}
                >
                  News
                </div>
              </div>
  
              <div>
                <div
                  className={classnames('links-holder-item', { active: activeTab === '4' })}
                  onClick={() => { toggle('4'); }}
                >
                  Videos
                </div>
              </div>
  
              <div>
                <div
                  className={classnames('links-holder-item', { active: activeTab === '5' })}
                  onClick={() => { toggle('5'); }}
                >
                  Statistics
                </div>
              </div>
            </Nav>   
          </div>
        </div>
        
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <AllTab 
              btnToggle={btnToggle}
              toggleBtn={toggle}
            />
          </TabPane>
          <TabPane tabId="2">
            <TippingAccordion 
              btnToggle={btnToggle}
            />
          </TabPane>
          <TabPane tabId="3">
            <NewsTab 
              btnToggle={btnToggle}
            />
          </TabPane>
          <TabPane tabId="4">
            <VideoTab 
              btnToggle={btnToggle}
            />
          </TabPane>
          <TabPane tabId="5">
            
          </TabPane>
        </TabContent>
      </main>
  )
}

export default dashboard
