import React, { useEffect, useState } from 'react'
import HeaderLogoTwo from './HeaderLogoTwo'
import HeaderSearchTwo from './HeaderSearchTwo'
import HeaderActionItemsTwo from './HeaderActionItemsTwo'
import * as styles from "./HeaderTwo.module.css"

const HeaderTwo = () => {
     const [openSearch, setOpenSearch] = useState(false)

 useEffect(() => {
    const handleSize = () => {
     if(window.innerWidth > 460){
        setOpenSearch(false)
        document.activeElement instanceof HTMLElement && document.activeElement.blur()
     }
    } 

    window.addEventListener('resize', handleSize)
    return () => window.removeEventListener('resize', handleSize)
 },[])

 if(openSearch){
    return <div className = {`${styles.gridMobileHdr} ${styles.grid} ${styles.gridGap} ${styles.hdrTwoCmns} normalPadding`}>
        <div className={`${styles.hdr__logo}`} >
        <HeaderLogoTwo/>  
        </div>
        <HeaderSearchTwo setOpenSearch={setOpenSearch} openSearch={openSearch}/>
       </div>
 }

  return (

        <div className = {`${styles.grid} ${styles.gridNormalHeader} ${styles.gridGap} ${styles.hdrTwoCmns} normalPadding`} style={{height:"64px"}}>
         <div>   
         <HeaderLogoTwo/>  
         </div>
         <div className= {styles.hdr__search}>
         <HeaderSearchTwo setOpenSearch={setOpenSearch} openSearch={openSearch}/>
         </div>
         <HeaderActionItemsTwo openSearch={openSearch} setOpenSearch={setOpenSearch}/>
         </div>
  )
}

export default HeaderTwo