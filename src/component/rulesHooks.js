/*******
 * Always write it inside the component or function
 * Component must be pascalCase (first letter should be uppercase)
 * we can directly import or we can directly write it using hookName 
 * Don't call hooks inside loops , condition, or in nested function
 * 
 */
import React from 'react'
//import React , {useState} from 'react'


function RulesHooks() {
   
    const  [myName, setMyName] = React.useState('sukanya');
    
  return (
    <div>
    <h1>{myName}</h1>
    </div>
  )
}

export default RulesHooks