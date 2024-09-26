import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
 let [counter,setCounter]= useState(5)
 // let counter=5
  const addValue = ()=>{
    if(counter==20){
      alert('you can not go above 20')
      return
    }
    counter++
    setCounter(counter)
   
  }

  const removeValue=()=>{
    if(counter ==0){
      // alert("you cant access negative number ")
      return
    }
    counter--
    setCounter(counter);
  }
 
  return (
    <>
    <h1>hello shashank</h1>
    <h2>counter value: {counter}</h2>

    <button onClick={addValue}>Add value{counter} </button>
    <br/>
    <button onClick={removeValue}>Remove value {counter}</button>
    <p>footer :{counter}</p>
    </>
  )
}

export default App
