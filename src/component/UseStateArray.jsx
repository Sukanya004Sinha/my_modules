import React, { useState } from 'react';

const UseStateArray = () => {
    const bioData = [
        {
            id: 0, myName : "sukanya", age: 24
            
        }, {
            id: 1, myName: "sinha", age : 24
        },
        {
            id: 2, myName: "sparm", age : 42
        }

    ]
    console.log(bioData);
    const [myArray,setMyArray] = useState (bioData);
    const clearArray = () =>{
       // bioData =[] ;
       setMyArray([]);
    }
  return (
    <>
    {
      //  bioData.map((currElem)=> <h1 className="h1style">Name:{currElem}</h1>)
     myArray.map((currElm) => 
         <h1 className ='h1style' key= {currElm.id}> Name: {currElm.myName}
        & Age: {currElm.age} </h1>
     
     )
    }
    <button className="btn" onClick = {clearArray}>Clear</button>
    
</>
  )

}

export default UseStateArray