import React, { useState } from 'react'

const BasicForms =() => {
    const [email,setEmail]= useState("");
    const [password,setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    const submitForm =(e) => {
        e.preventDefault();

        if(email && password) {
            const newEntry ={ id: new Date().getTime().toString(),email, password };
        
            setAllEntry([...allEntry, newEntry]);
               console.log(allEntry);
               setEmail("");
               setPassword("");
        }
        else{
            alert("please fill all the required fields");
        }
        
        //const newEntry ={ id: newDate().getTime().toString(),email: email, password: password }; in object destructuring if both key and values are same then we don't need to write both 
        //we can simply write one then also it will work so removing value only writing key
        // const newEntry ={ id: new Date().getTime().toString(),email, password };
        
        // setAllEntry([...allEntry, newEntry]);
        //    console.log(allEntry);
        //    setEmail("");
        //    setPassword("");
        
    }


  return (
    <>
   <form action='' onSubmit={submitForm}>
   <div>
    <label htmlFor='email'>Email</label>
    <input type = 'email' name='email' id= 'email' autoComplete='off'
    value={email} 
    onChange = {(e)=> setEmail(e.target.value)}
    />
    </div>
    <div>
    <label htmlFor='email'>Password</label>
    <input type = 'password' name='password' id= 'password'  autoComplete='off' value={password}
    onChange = {(e) => setPassword(e.target.value)} />

    
    </div>
    <button type="Submit">Login</button>
    </form>
    <div>{
        allEntry.map((currElem)=>{
            const {id,email,password} = currElem;
              return (
                // <div className='showData' key ="id">
                // <p>{currElem.email}</p>
                // <p>{currElem.password}</p> </div>
                <div className='showData' key ="id">
                <p>{email}</p>
                <p>{password}</p> </div>
              )
        })
             } </div>
    </>
    
  )
}

export default BasicForms