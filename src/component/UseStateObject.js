import React, { useState } from "react";
const UseStateObject = () =>{
    const [myObject, setMyObject] =React.useState({
    myName: "Sparm", myAge: 24, degree: "MCA"
    });
    const changeObject =() =>{
        //setMyObject ({myName: "sukanya sinha" , myAge: "26", degree: "BSC"});
         setMyObject ({...myObject, myName: "sukanya s"});
    }
    return (
        <div>
        <h1 className="h1style">Name: {myObject.myName} & Age: {myObject.myAge} Degree: {myObject.degree}</h1>
        <button className="btn" onClick={changeObject}>Update</button>
        </div>
        
    )
}
export default UseStateObject;