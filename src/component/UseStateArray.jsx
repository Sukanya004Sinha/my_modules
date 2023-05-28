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
    const [myArray,setmyArray] = useState (bioData);
    const clearArray = () =>{
        bioData =[] 
    }
  return (
    <>
    {
     myArray.map((currElm) => {
        return  <h1 className ='h1style'>Name: {currElm.myName} & Age: 
        {currElm.age} </h1>
     
     })
    }

</>
  )

}

export default UseStateArray