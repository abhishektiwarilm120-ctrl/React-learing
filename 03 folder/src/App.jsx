import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './component/card'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='parent'>

 
  <Card user='React' launchYear={2014}  img='https://media.istockphoto.com/id/2185523655/vector/particle-of-an-atom-atom-structure-science-sign-atom-vector-model.jpg?s=1024x1024&w=is&k=20&c=_p8vOhgN-3peyhj9w8Wbl_8h9faZurAhi36W-_ooHmY='/>

   <Card user='Js' launchYear={2064} img='https://media.istockphoto.com/id/1413514709/photo/stylized-3d-javascript-icon-side-view.jpg?s=1024x1024&w=is&k=20&c=pISjwboymUwae-1SOviu2-nW32Y51EisN74mugMjbZ4='/>


    <Card user='Fronted'  launchYear={3014} img=' https://img.freepik.com/premium-vector/front-end-logo-design_717549-4108.jpg?w=1380' />
    
  

   </div>
  )
}

export default App
