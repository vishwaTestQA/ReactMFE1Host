import React from 'react'

import * as styles from "./Header.module.css"

const HeaderLogo = () => {
  return (
    // className='logoParent'>
    <div >
        <img className={` ${styles.logoimg}`} src="/assets/images/logo.jpg" alt="logo"/>
    </div>
  )
}

export default HeaderLogo