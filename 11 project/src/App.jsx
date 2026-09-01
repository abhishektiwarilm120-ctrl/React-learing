import { useState } from 'react'
import { useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [a, setA] = useState(0)
    const [b, setB] = useState(0)

useEffect(  
function hendClick(){
  console.log("clicked ..... Button A")
},[a])




useEffect(  
function hendClick(){
  console.log("clicked ..... Button B")
},[b])


  return (




    <div>

<h1>A is {a}</h1>
<h2>B is {b}</h2>
<button onClick={() => setA(a + 1)}>Change A</button>
<button onClick={() => setB(b + 1)}>Change B</button>

      
    </div>
  )
}

export default App
