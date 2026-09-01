import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [data,setData] =useState([])

const getData = async () =>{

  const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  console.log(res.data)
  setData([res.data])
}
  return (
    <div>

<button onClick={getData}>Get Data</button>
<div>

{
  
    data.map(function(elem){
      return <p>{elem.title}</p>
    })
  
}

</div>
    </div>
  )
}

export default App
