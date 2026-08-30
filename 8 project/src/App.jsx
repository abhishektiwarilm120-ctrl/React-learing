import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
const [name,setName]= useState('')

  function submit(e){
    e.preventDefault()
    console.log(  'form sunmit',name.value)
  }

  return (
   <div>

    <form onSubmit={(e)=>{
      submit(e)
    }}>

<input type='text' placeholder='Enter your name'


 value={name}
        onChange={(e) => setName(e.target.value)}



></input>

<button>Cllick</button>

<h1>hello{name}</h1>

    </form>
   </div>
  )
}

export default App


