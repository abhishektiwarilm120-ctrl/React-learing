import { useState } from 'react'
import {useEffect} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios'
import Card from './Component/Card'



function App() {
  const [count, setCount] = useState(0)
  const [userData, setUserData] = useState([])
  const [index,setIndex] =useState(1)

  async function getdata(){
const response = await axios.get(` https://picsum.photos/v2/list?page=${index}&limit=30`)
setUserData(response.data)
 

console.log(response.data)




}


    
useEffect(function(){
  getdata()
},[index])

let personData =<h3 className=' text-gray-400 text-center text-xl absolute left-1/2 top-1/2translate-x-1/2 translate-y-1/2'>Loading....</h3>

if(userData.length>0){
  personData = userData.map(function(elem,idx){
    return <div key={elem.id || idx}>
    
<Card elem={elem}/>

    </div>
    
   

   
  })
}



  return (
    <div className='bg-black h-screen overflow-auto text-white'>



<div className=' flex flex-wrap gap-5'>

  {personData}
</div>

<div className='flex justify-center items-center'>

  <button 
  
  style={{opacity:index===1?0.5:1}}
  
  className='bg-yellow-400  text-black font-bold  active:95 text-black rounded px-5 py-2 m-10 cursor-pointer active:scale-95'
  onClick={()=>{
console.log('prev button was clicked')



if(index>1){
setIndex(index-1)
}

setUserData([])


  }}
  >Prev</button>

<p className='text-white font-bold text-xl'>Page {index}</p>

  <button className='bg-yellow-400  text-black font-bold  active:95  rounded px-5 py-2 m-10 cursor-pointer active:scale-95'
  onClick= {()=>{
    console.log('next button was clicked')
setUserData([])
    setIndex(index+1)
  }}
  >Next</button>
</div>
      
    </div>
  )
}

export default App
