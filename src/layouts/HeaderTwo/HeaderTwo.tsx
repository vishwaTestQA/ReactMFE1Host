import React, { useEffect, useLayoutEffect, useState } from 'react'
import HeaderLogoTwo from './HeaderLogoTwo'
import HeaderSearchTwo from './HeaderSearchTwo'
import HeaderActionItemsTwo from './HeaderActionItemsTwo'
import * as styles2 from "./HeaderTwo.module.css"

const HeaderTwo = () => {
     const [openSearch, setOpenSearch] = useState(false)

     const [left, setLeft] = useState<Number>(0)

 useEffect(() => {
    const handleSize = () => {
     if(window.innerWidth > 468){
        setOpenSearch(false)
        document.activeElement instanceof HTMLElement && document.activeElement.blur()
     }
    } 

    window.addEventListener('resize', handleSize)
    return () => window.removeEventListener('resize', handleSize)
 },[])

//  if(openSearch){
//     return <div className = {`${styles.gridMobileHdr} ${styles.grid} ${styles.gridGap} ${styles.hdrTwoCmns} normalPadding`}>
//         <div className={`${styles.hdr__logo}`} >
//         <HeaderLogoTwo/>  
//         </div>
//         <HeaderSearchTwo setOpenSearch={setOpenSearch} openSearch={openSearch}/>
//        </div>
//  }



  return (

    <div>
        <div className = {`${styles2.gridTwo} hdrPosition`}>
         <HeaderLogoTwo openSearch = {openSearch} setLeft={setLeft}/>  
         <HeaderSearchTwo/>
         <HeaderActionItemsTwo openSearch={openSearch} setOpenSearch={setOpenSearch}/>
         <div className={`${openSearch ? "open": ""} overlay`} style={{left: `${left}px`}}>
           <input id="search" className={styles2.inputTwo} style={{height: "80%"}}/>
           <button onClick={() => setOpenSearch(false)}>X</button>
           </div>
         </div>
</div>

  )
}

export default HeaderTwo