import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  localStorage.setItem('user','Jack')
  localStorage.setItem('age','89')

const user ={
  name:"Abhi",
  age:32
}
  localStorage.setItem('user', JSON.stringify(user))

  return (
    <div>



    </div>
  )
}

export default App
