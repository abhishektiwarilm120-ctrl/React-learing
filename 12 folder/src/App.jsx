import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import{Route,Routes} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Component from './Component/Component.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

<Component/>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<Contact />} />
</Routes>

    </div>
  )
}

export default App