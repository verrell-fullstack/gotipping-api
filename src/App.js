import React, { useState, useRef } from 'react'
import {
  HashRouter,
  BrowserRouter as Router,
  Link,
  Redirect,
  withRouter,
  Route,
  Switch,
} from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { useHistory } from "react-router-dom";

import Header from './components/Header'
// import Footer from './components/Footer'

import Sidebar from './components/Sidebar'
import Home from './containers/home'
import About from './containers/about'
import Globals from './containers/globals'
import AllTab from './containers/all-tab'
import NewsTab from './containers/news-tab'
import TippingAccordion from './containers/tipping-competitions'
import VideoTab from './containers/video-tab'
import NoRouteMatch from './containers/404'

import { ReactComponent as TopGames } from '../src/assets/svg/sidebar-top-games.svg'
import { ReactComponent as Basketball } from '../src/assets/svg/sidebar-basketball.svg'
import { ReactComponent as Football } from '../src/assets/svg/sidebar-football.svg'
import { ReactComponent as Tennis } from '../src/assets/svg/sidebar-tennis.svg'
import { ReactComponent as Volleyball } from '../src/assets/svg/sidebar-volleyball.svg'
import { ReactComponent as Cricket } from '../src/assets/svg/sidebar-cricket.svg'
import { ReactComponent as Rugby } from '../src/assets/svg/sidebar-rugby.svg'
import { ReactComponent as Boxing } from '../src/assets/svg/sidebar-boxing.svg'
import { ReactComponent as Badminton } from '../src/assets/svg/sidebar-badminton.svg'
import { ReactComponent as Esports } from '../src/assets/svg/sidebar-esports.svg'
import { ReactComponent as MotoSport } from '../src/assets/svg/sidebar-moto-sport.svg'



import Dashboard from './containers/dashboard';

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

const userID = localStorage.getItem('User_ID')

function App() {
  const appRef = useRef(null);
  const [btnToggle, setBtnToggle] = useState(false)
  // const [userLogged, setuserLogged] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  React.useEffect(() => {
    userID ? console.log('userID exist') :  localStorage.removeItem('User_ID')
  }, [])

  return (
    <HashRouter basename="/">
      <div className="App" ref={appRef}>
        <Header
          reference={appRef}
          btnToggle={btnToggle}
          setBtnToggle={setBtnToggle}
          // userLogged={userLogged}
          // setuserLogged={setuserLogge
          loginOpen={loginOpen}
          useHistory={useHistory}
          setLoginOpen={setLoginOpen}
        />
        {/* <Sidebar
          content={sideBarList}
          btnToggle={btnToggle}
          // userLogged={userLogged}
        /> */}

        {
          userID ? (
            <Switch>
              <Route path='/dashboard' exact
                render={() => <Dashboard btnToggle={btnToggle} />} />

              {/* <Route path='/globals'  component={() => (
                <Globals
                  reference={appRef}
                  btnToggle={btnToggle}
                />
              )}/> */}
              {/* <Route path='/tipping-competitions'  component={() => (
                <TippingAccordion
                  btnToggle={btnToggle}
                  content={sideBarList}
                  // userLogged={userLogged}
                />
              )}/>
              <Route path='/all-tab'  component={() => (
                <AllTab
                  btnToggle={btnToggle}
                  content={sideBarList}
                  // userLogged={userLogged}
                />
              )}/>
              <Route path='/news-tab'  component={() => (
                <NewsTab
                  btnToggle={btnToggle}
                  content={sideBarList}
                  // userLogged={userLogged}
                />
              )}/>
              <Route path='/video-tab'  component={() => (
                <VideoTab
                  btnToggle={btnToggle}
                  content={sideBarList}
                  // userLogged={userLogged}
                />
              )}/>
              <Route path="/" component={() => (
                <Home
                  btnToggle={btnToggle}
                  content={sideBarList}
                  // userLogged={userLogged}
                />
              )} /> */}
              <Route component={NoRouteMatch} />
            </Switch>
          ) : (
            <Redirect to='/' />
          )
        }

        <Switch>
          <Route path="/about" component={About} />
        </Switch>

        {/* <Footer /> */}
      </div>
    </HashRouter>
  );
}

export default hot(module)(App);
