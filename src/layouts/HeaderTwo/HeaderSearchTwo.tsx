import React from 'react'

import * as styles from "./Header.module.css"
import * as styles2 from "./HeaderTwo.module.css"

type Props ={
    setOpenSearch: (v:boolean) => void
    openSearch: boolean
}
const HeaderSearchTwo = ({openSearch, setOpenSearch}:Props) => {

  return (
      <div className={`flex spaceBetween flexGap_20 alignCenter ${styles.input_container}`}>
         <div className={styles.hdr_input_container}>
         <input className={styles.input}/>
         </div>

         {openSearch &&  <button className={styles.close_visiblity}  onClick={() => setOpenSearch(false)}>X</button>}
         </div>
  )
}

export default HeaderSearchTwo