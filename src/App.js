import React, { useState } from 'react';
import RulesHooks from './component/rulesHooks';
import UseStateArray from './component/UseStateArray';
import UseStateArray1 from './component/UseStateArray1';
import UseStateObject from './component/UseStateObject';
import ShortCircuitEval from './component/ShortCircuitEval';
const App = () => {
//   var val = 'sparm';
//   //console.log(useState('sukku'));
//  // let myfirstVal = useState('sukanyass')[0];
//  // console.log(myfirstVal);

//  //const [initialState,func]  = useState('sukanya sinha')
// const [myName,setMyName] = useState('sukanyasinha');
//   const changeName = () => {
//    // val = "sukanya";
//     //console.log(myName);
//     setMyName ('sparm');
     
// let val = myName;
// /**** 1way
//  *  if(val === 'sukanyasinha'){
//   setMyName('sparm');
// }
// else{
//   setMyName('sukanyasinha');
// }
//   **/  
//  //2 way using ternary operator

//  (val === 'sukanyasinha') ? setMyName ('sparm') : setMyName ('sukanyasinha');
// }
// console.log(myName);
  // return (
  //   <div>
  //   <h1>{myName}</h1>
  //   <button className="btn" onClick={changeName} >Click me please</button>
  //   </div>
  // )
//}
return (
  <div>
{/*<RulesHooks />*/ }
   {/*<UseStateArray /> */}
  {/*<UseStateObject /> */}
  {/*<UseStateArray1 /> */}
  <ShortCircuitEval />
  </div>
)
}

export default App;