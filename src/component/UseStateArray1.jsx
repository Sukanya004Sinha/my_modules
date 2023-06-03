import React, { useState } from 'react'

function UseStateArray1() {
    const bioData= [{id: 1, name: "sukanya", age: "24"},
    {id: 2, name: "sparm", age: "25"},
    {id: 3, name: "ss", age: "26"}
]
const [myArray,setMyArray]= useState(bioData);

console.log(bioData);

const clearArray= ()=>{
    setMyArray([]);
    
}
// const removeArray = (id) =>{
//    // setMyArray(id);
//    const myNewArray = myArray.filter((curElem)=>{
//     return curElem.id !== id;
//    })
const removeArray = (id)=>{
    const myNewArray = myArray.filter((curElem) => {
      return curElem.id !== id;
    

})
setMyArray(myNewArray);
}

//    setMyArray(myNewArray);

  return (
    <>
  {
   // <h1>Name: "sukanya", age: "24"</h1>
   myArray.map((curElem)=>  {
   return (
    <h1 className='h1style'> key={curElem.id} 
    Name: {curElem.name} age= {curElem.age} 
    <button className='btn' onClick ={ () =>removeArray(curElem.id)}>Remove</button>
    </h1>
   
   );
   

  } )
 
}
   <button className="btn" onClick={clearArray}>Clear</button>

   </>
  )
}

export default UseStateArray1