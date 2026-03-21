import React, { useLayoutEffect, useRef, useState } from 'react'

import * as styles2 from "./HeaderTwo.module.css"

type Props ={
    openSearch: boolean,
    setLeft: (v: number) => void
}
const HeaderLogoTwo = ({openSearch, setLeft}:Props) => {
    
  const imgRef = useRef<HTMLImageElement>(null)
    useLayoutEffect(() => {
  if(!openSearch || !imgRef.current) return 
     setLeft(imgRef.current.clientWidth)
     console.log("useLayoutEffect", imgRef.current.clientWidth)
},[openSearch])

  return (
    <div style={{height:"100%"}}>
       <img ref={imgRef} className={`${styles2.logoimg}`} src="/assets/images/logo.jpg" alt="logo" width={100} height={40}/>
    </div>
  )
}

export default HeaderLogoTwo