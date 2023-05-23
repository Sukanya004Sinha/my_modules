import React, {useState} from  "react";
import './App.css';
function App() {
 // const [name,setName] = useState("sukanya");
 // const [flag,setFlag] = useState(false);
 const [steps, setSteps] = useState(0);
   /*
  useState - > We cannot use the useState conditionally also we cant the useState inside the function or inside the conditional rendering 
   so use state will always call in the exact order in which order its defined and its a good practice
  useState returns 2 things  1 returns its current state and 2 where actually you want to update an state 
   
  usually in useState we can use 4 values boolean, String , Arrays
  ***/
  //console.log(useState()); 
 
  //normally without hooks here button is clicked button component is not getting re=render automatically / let a = "Sukanya"
//   function changeName() {
//     console.log("clicked!");
//     a= "sparm";
//     return a;
//   }
//   return (
//     <div className="App">
//     <div>Hello, {a}</div>
//     <button onClick={changeName}> </button>
//     </div>
//   );
// }
  // function changeName(){
  //   console.log("clicked!!");
  //   return setName("Sparm");
    
  // }
  // return (
  //   <div className="App">
  //     <div>Hello , {name}</div>
  //     <button onClick = {changeName}>Click Me </button>
  //   </div>
  // );


  /**
   * For boolean values
   * 
   */
  
  // function changeName() {
  //   console.log("clicked");
  //   return setFlag(!flag);
  // }
  //  return (
  //   <div className="App">
  //   <div>Hello, {flag?name : ""}</div>
  //   <button onClick = {changeName}> Click Me</button>
  //   </div>
  //  )
  // }
  /**
   * For Numbers
   */
     function increment () {
      //return setSteps(steps+1);
      // whenever you will deal with numbers you can usePrevState
      setSteps((prevState) => prevState+1);
      setSteps((prevState) => prevState+1);

     }
     function decrement () {
      return setSteps (steps-1);

     }
    function changeName() {

    }
    return (
      <div className="App">
      <div> {steps}</div>
      <button onClick={increment}>+ </button>
      <button onClick={decrement}>-</button>
      </div>
    );
}

export default App;