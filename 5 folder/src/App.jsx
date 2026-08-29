import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Button from './Component/Button'

function App() {
  const [count, setCount] = useState(0)
const [a,seta]= useState(1)

function changeA(){
  seta(a+1);
}





  return (
   
    <div>
    

<Button/>

    </div>
  )
}

export default App
