import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const AudioComponent = () => {
    const [isMuted, setIsMuted] = useState(true) 
    const [isMutedShorts, setIsMutedShorts] = useState(true) 
    const [isPlaying, setIsPlaying] = useState(false) 

    const audioRef = useRef<HTMLAudioElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const muteRef = useRef<HTMLButtonElement>(null)
    
    useEffect(() => {
      if(!audioRef.current || !videoRef.current) return 
      videoRef.current.volume = 0
      videoRef.current.play()
    },[])

    const handleAudioSound = () => {
      setIsMuted(prev => !prev)
      if(!audioRef.current) return
      if(isMuted){
        audioRef.current.volume = 1;
        audioRef.current.play()
      }else{
        audioRef.current.pause()
        audioRef.current.currentTime = 0  //restart
      }
    }

    const handleMusicShorts = () => {
        setIsMutedShorts(prev => !prev)
        if(!videoRef.current) return
        if(isMutedShorts){
          videoRef.current.volume = 1
        //   videoRef.current.play()
        }else{
          videoRef.current.volume = 0;
        }
    }

  return (
    <div>
    <audio ref={audioRef} loop>
       <source src="/assets/omNamoNarayana.mp3" type='audio/mpeg'/>
       {/* Om Namo Narayana */}
    </audio>

   <button ref={muteRef} onClick={handleAudioSound}>
      {isMuted ? "🔇" : "🔊"}
   </button>

   <video ref={videoRef} className='videoShorts' loop width={200} height={400}>
    <source  src='/assets/ReactRoadMap.mp4' type='video/mp4'></source>
   </video>
   <button onClick={handleMusicShorts}>
      {
        isMutedShorts ? "🔇" : "🔊"
      }
   </button>

   {/* <iframe width="400" height="300" src='https://youtube.com/shorts/tG68bVNjiZU?si=2hw7b1XCL6Y35PWX'></iframe> */}
   <iframe width="450" height="250" src="https://www.youtube.com/embed/2K0_8KtsMZk?si=8Nva1bAQswp-ICNu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default AudioComponent