import React, { useEffect, useState } from 'react'
import * as styles from "./Header.module.css"
import HeaderLogo from './HeaderLogo'
import HeaderSearch from './HeaderSearch'
import HeaderActionItems from './HeaderActionItems'

const Header = () => {
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
    return <div className = {`flex  ${styles.hdr__flexGap} spaceBetween alignCenter ht_64`}>
        <div className={`${styles.hdr__logo_visiblity}`} >
        <HeaderLogo/>  
        </div>
        {/* <div className= {styles.hdr__search_visiblity}> */}
        <HeaderSearch setOpenSearch={setOpenSearch} openSearch={openSearch}/>
        {/* </div> */}
    </div>
    //    return <div className = {`grid gridHeader2`}>
    //     <div className={`${styles.hdr__logo_visiblity}`} >
    //     <HeaderLogo/>  
    //     </div>
    //     {/* <div className= {styles.hdr__search_visiblity}> */}
    //     <HeaderSearch setOpenSearch={setOpenSearch} openSearch={openSearch}/>
    //     {/* </div> */}
    // </div>
 }

  return (
      <>
       <div className = {`flex  ${styles.hdr__flexGap} alignCenter ht_64`} style={{width:"100%"}}>
        {/* <div className = {`grid gridHeader  ${styles.hdr__flex}`} style={{height:"64px"}}> */}
        <div  className={`logoParent ${styles.hdr__logo_visiblity} flex alignCenter`} style={{width:"140px"}}>
         <HeaderLogo/>  
         </div>

         <div className= {styles.hdr__search_visiblity}>
         <HeaderSearch setOpenSearch={setOpenSearch} openSearch={openSearch}/>
         </div>

         <HeaderActionItems setOpenSearch={setOpenSearch}/>
         </div>
   </>
  )
}

export default Header