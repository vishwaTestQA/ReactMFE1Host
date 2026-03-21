import React from 'react'

import * as styles from "./Header.module.css"
import * as styles2 from "./HeaderTwo.module.css"

type Props ={
    setOpenSearch: (v:boolean) => void
    openSearch: boolean
}
const HeaderSearchTwo = () => {

  return (
      <div className={`${styles2.flexTwo} ${styles2.searchDesktopTwo}`}>
         <div className={styles2.inputDesktop}>
         <input id="search" className={styles2.inputTwo}/>
         </div>
         {/* {openSearch &&  <button className={styles.close_visiblity}  onClick={() => setOpenSearch(false)}>X</button>} */}
     </div>
  )
}

export default HeaderSearchTwo