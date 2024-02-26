import React, {useState}from 'react'
import './index.css'

const App=()=>{
  const [counter,setCounter]=useState(0)
  const [value,setValues]=useState([])
  const handleClick=()=>{
    setCounter(counter+1)
    setValues(value.concat(counter))
  }

  return(
   <div className='container'>
     <p>React App configuration using webpack </p>
     <p>webpack {counter} clicks</p>
     <button onClick={handleClick}>press</button><br/> to change counter
     
     
   </div>
  )
 }
 
 export default App