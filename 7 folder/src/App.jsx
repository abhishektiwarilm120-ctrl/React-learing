import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  function submit(e){
    e.preventDefault()
    console.log("Form submit")
  }

  return (
   <div>

    <form onSubmit={(e)=>{
      submit(e)
    }}>

<input type='text' placeholder='Enter your name'></input>

<button>Cllick</button>

    </form>
   </div>
  )
}

export default App
