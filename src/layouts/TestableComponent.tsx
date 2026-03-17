import React from 'react'

const TestableComponent = () => {
  return (
    <div style={{display:"flex", gap:"10px", alignItems: "center",justifyContent:"center", padding:"10px", border:"solid"}}>
        <section style={{flexShrink:0, border:"solid"}}>
            left
        </section>

        <section style={{flexGrow: 1, border:"solid"}}>
            middle
        </section>

        <section style={{flexShrink:0, border:"solid"}}>
            right
        </section>
    </div>
  )
}

export default TestableComponent