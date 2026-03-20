import React from 'react'

import * as styles from "./HeaderTwo.module.css"

const HeaderLogoTwo = () => {
  return (
    // className='logoParent'>
    <div >
       <img className={` ${styles.logoimg}`} src="/assets/images/logo.jpg" alt="logo" width={150} height={40}/>
    </div>
  )
}

export default HeaderLogoTwo