import React from 'react'
import classnames from 'classnames'

import '../stylesheets/main.scss'

import SubHeaderPills from '../components/SubHeaderPills'

const subheaderTabs = {
  carouselShow: false,
}

function Home({btnToggle, content, userLogged}) {
  return(
    <>
      <main className={classnames("dashboard user-logged-content", {
        "content-collapsed": !btnToggle,
        "user-logged": userLogged
      })}>
        <SubHeaderPills 
          subheader={content[0]}
          subheaderTabs={subheaderTabs}
        />
      </main>
    </>
  )
}

export default Home
