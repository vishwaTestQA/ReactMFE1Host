import React, { useEffect, useState } from 'react'
import HeaderLogoTwo from './HeaderLogoTwo'
import HeaderSearchTwo from './HeaderSearchTwo'
import HeaderActionItemsTwo from './HeaderActionItemsTwo'
import * as styles from "./HeaderTwo.module.css"

const HeaderThree = () => {
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
    return <div className = {`${styles.gridMobileHdr}`}>
        <div className={`${styles.hdr__logo}  ${styles.grid} ${styles.gridMobileHdr}`} >
        <HeaderLogoTwo/>  
        <HeaderActionItemsTwo setOpenSearch={setOpenSearch}/>
        </div>
        <HeaderSearchTwo setOpenSearch={setOpenSearch} openSearch={openSearch}/>
    </div>
 }

  return (

        <div className = {`${styles.grid} ${styles.gridNormalHeader} `} style={{height:"64px"}}>
         <div>   
         <HeaderLogoTwo/>  
         </div>
         <div className= {styles.hdr__search}>
         <HeaderSearchTwo setOpenSearch={setOpenSearch} openSearch={openSearch}/>
         </div>
         <HeaderActionItemsTwo setOpenSearch={setOpenSearch}/>
         </div>
  )
}

export default HeaderThree