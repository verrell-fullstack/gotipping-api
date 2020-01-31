import React, { useState, useRef } from 'react'
import classnames from 'classnames'
import '../stylesheets/main.scss'
import SubHeaderPills from '../components/SubHeaderPills'
import Header from '../components/Header'


const subheaderTabs = {
  carouselShow: false,
}

function Home({btnToggle, content, userLogged}) {

  const appRef = useRef(null);
  const [loginOpen, setLoginOpen] = useState(false)

  return(
    <>
      <Header
        reference={appRef}
        // btnToggle={btnToggle}
        // setBtnToggle={setBtnToggle}
        // userLogged={userLogged}
        // setuserLogged={setuserLogge
        loginOpen={loginOpen}
        // useHistory={useHistory}
        setLoginOpen={setLoginOpen}
      />
      {/* <Sidebar
        content={sideBarList}
        btnToggle={btnToggle}
        // userLogged={userLogged}
      /> */}

      <main className={classnames("dashboard user-logged-content user-logged", {
        "content-collapsed": !btnToggle,
      })}>
        {/* <SubHeaderPills 
          subheader={content[0]}
          subheaderTabs={subheaderTabs}
        /> */}
      </main>
    </>
  )
}

export default Home
