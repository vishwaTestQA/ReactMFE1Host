import React from 'react'

import * as styles from "./Header.module.css"

type Props ={
    setOpenSearch: (v:boolean) => void
    openSearch: boolean
}
const HeaderSearch = ({openSearch, setOpenSearch}:Props) => {

  return (
      <div className={`flex spaceBetween flexGap_20 alignCenter ${styles.input_container}`}>
         <div className={styles.hdr_input_container}>
         <input className={styles.input}/>
         </div>

         {openSearch &&   <div role='button' className={styles.close_visiblity}  onClick={() => setOpenSearch(false)}>X</div>}
         </div>
  )
}

export default HeaderSearch