import React, { useState } from 'react'

function ShortCircuitEval() {
  const [demo,setDemo] = useState("");
  return (
    <div>
    <h1 className='h1style'>    {demo || 
    <>
    <p>Sparm</p>
    <h1>gff</h1>
    </>
    }
    </h1>
    <h1 className='h1style'>{demo && "javascript"}</h1>
    </div>
  )
}

export default ShortCircuitEval