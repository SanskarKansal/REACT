import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter]=useState(15)

  // let counter =15

  const addvalue =() =>{
    console.log("clicked",counter);
    // counter=counter+1
    setcounter(prevcounter => prevcounter+1)
    setcounter(prevcounter => prevcounter+1)
    //increase counter multiple time on a single click

    // setcounter(counter+1)
    // setcounter(counter+1)
    // increases  counter onlty one time
  }

  const removevalue =() =>{
    console.log("clicked",counter);
    // counter=counter+1
    setcounter(prevcounter => prevcounter+1)
    
    setcounter(counter-1)
   }

  return (
    <>
      <h1>rect with vite</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addvalue}>
        add value :{counter}
      </button>
      <br />
      <button onClick={removevalue}>remove value : {counter} </button>
    </>
  )
}

export default App
