



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './component/Card.jsx'
import Navbar from './component/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    

<Navbar/>

      <Card/>
         <Card/>
            <Card/>
               <Card/>
                  <Card/>
    </div>
     
  )
}

export default App
