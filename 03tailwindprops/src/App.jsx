import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'


function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username: "hitesh",
    age: 21
  }
  let newarray=[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-blue-500 p-3 rounded-xl'>Tailwind test</h1>
      <Card username="codewithme" btntext="visit me" />
      <Card username="code with me" />
      
    </>
  )
}

export default App
