import axios from 'axios'
import { useState,useEffect } from 'react'

export const useNotes=(url)=>{
  const [notes,setNotes]=useState([])
  useEffect(()=>{
     axios.get(url).then(res=>{
      console.log(res.data)
      setNotes(res.data)})
    },[url])

  return notes
}