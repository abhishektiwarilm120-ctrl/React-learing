import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState({user:'Aman'})

function coco(){
  setCount(2)
  console.log(count);
}

function btnClick(){

const newCountn ={...count};
newCountn.user='raj'

  setCount(newCountn)


  
}


  return (
    <div className='btn'>
      <h1>Value update,{count.user}</h1>
<button className='one' onClick={btnClick}>Click</button>


    </div>
  )
}

export default App
