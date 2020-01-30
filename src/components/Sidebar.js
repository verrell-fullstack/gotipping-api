import React, { useState, useEffect } from 'react'
import classnames from 'classnames'

function Sidebar({content, btnToggle}) {

  const [userIdCookies, setUserIdCookies] = useState('')
  const userID = localStorage.getItem('User_ID')

  
  useEffect(() => {
    setUserIdCookies(userID)
  }, [])
  
  console.log(userIdCookies)

  return(
    <>
      <div className={classnames("sidebar-wrapper user-logged-content bg-savoy-blue", {
        "sidebar-collapsed-wrapper" : !btnToggle,
        "user-logged" : userIdCookies ? true : false,
        // "" : false
      })}>
        <div className="sidebar-list">
          {
            content.map((item, i) => {
              return(
                <div key={i} className="sidebar-item">
                  <div className="icon-holder">
                    <span className={item.iconClass}>{item.icon}</span>
                  </div>
                  <div className="label-holder">
                    <p className="t-paragraph c-periwinkle label">{item.label}</p>
                  </div>
                  <div className="quantity-holder">
                    <p className="t-paragraph c-periwinkle quantity">{item.quantity === '0' ? item.quantity : '+' + item.quantity}</p>
                  </div>
                </div>
              )
            })
          }

        </div>
        {/* <div className="sidebar-footer">
          <p className="t-paragraph c-periwinkle t-copyright"><span className="far fa-copyright icon-copyright"></span> Copyright 2019 GoTipping All rights reserved.</p>
        </div> */}
      </div>
    </>
  )
}

export default Sidebar
