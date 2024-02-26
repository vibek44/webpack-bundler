import React, {useState}from 'react'
import {useNotes} from './hooks/index'
import './index.css'

const App=()=>{
  const [counter,setCounter]=useState(0)
  const [value,setValues]=useState([])
  const notes=useNotes(BACKEND_URL)
  const handleClick=()=>{
    setCounter(counter+1)
    setValues(value.concat(counter))
  }

  return(
   <div className='container'>
     <p>React App configuration using webpack </p>
     <p>webpack {counter} clicks</p>
     <button onClick={handleClick}>press</button><br/> to change counter
     <p>notes has {notes.length} length</p>

    
   </div>
  )
 }
 
 export default App