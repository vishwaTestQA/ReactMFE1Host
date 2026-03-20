import React, { useEffect } from 'react'

type Props = {
    name: string,
}

const WelcomeComponent = ({name}:Props) => {
    const message = "welcome for screenreaders";
    // const msg1 = "Today's gold price in Madurai stands at ₹15,164 per gram for 24 karat gold (99.9% purity), ₹13,900 per gram for 22 karat gold (91.6% purity), and ₹11,585 per gram for 18 karat gold (75% purity)"
    useEffect(() => {
        const speak = () => {
          const msg = new SpeechSynthesisUtterance(`welcome ${name}`)
        }
       speak();


    },[name])

  return (
    <div>
        <h1>Welcome {name}</h1>

            <div
        aria-live="assertive"
        style={{
          position: "absolute",
          left: "-9999px",
          height: "1px",
          width: "1px",
          overflow: "hidden"
        }}
      >
        {message}
      </div>
    </div>
  )
}

export default WelcomeComponent