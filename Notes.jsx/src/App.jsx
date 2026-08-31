import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { X } from 'lucide-react';


function App() {
  const [count, setCount] = useState(0)
 const [title, subtitle] = useState('')
  const [Detalis, subDetails] = useState('')
  const [task, subTask] = useState([])



const submitHandler=(e)=>{
  e.preventDefault()
  // console.log(title,Detalis);

const copyTask =[...task];
copyTask.push({title,Detalis})
subTask(copyTask)
console.log(task)

  subtitle('')
subDetails('')
  
}

const deletNote=(idx)=>{

const copyTask=[...task]
copyTask.splice(idx,1)
subTask(copyTask)


console.log("note deleted")
}


  return (
   <div className='h-screen bg-black lg:flex text-white ' >

   <form onSubmit={(e)=>{
    submitHandler(e)
   }} className='flex lg:w-1/2items-start p-10  flex-col item-start   gap-5'>


<h1 className='text-3xl font-bold'>Add Notes</h1>
  {/* phela input */}
<input type='text' placeholder='Enter Notes Heading' className='px-5 py-2 w-full border-2 rouded outline-none '
value={title}
onChange={(e)=>{
  subtitle(e.target.value)
}}
></input>


{/* 
dushra wala */}
<textarea placeholder='Enter Detalis'        className='px-5 py-2 w-full border-2 rouded h-30 outline-none'
value={Detalis}
onChange={(e)=>{
  subDetails(e.target.value)
}}
></textarea>

<button className='bg-white active:bg-gray-300 text-black px-5 py-2 outline-none rounded w-full'>Add Notes</button>

   </form>

<div className=' lg:w-1/2  p-10 w-full lg:border-l-2'>

<h1 className='text-3xl font-bold'>Reent Notes Notes</h1>


<div className='flex flex-wrap gap-5 mt-5 overflow-auto h-full pl-40'>
  


{task.map(function (elem,idx) {
  return <div  key={idx}className=' relative h-52 w-32 bg-cover  bg-center bg-no-repeat rounded-2xl text-black  bg-[url("https://cdn.pixabay.com/photo/2013/07/13/11/55/notes-158958_960_720.png")] '> 
 
  <h3 className='leading-tight text-small font-bold flex item-center pl-4 mt-10'>{elem.title}</h3>
  <p className=' leading-tight font-medium text-sm/5 text-gray-900 pl-4 '>{elem.Detalis}</p>

  
 <button onClick={()=>{
  deletNote(idx)
 }}   className='bg-amber-600 absolute bottom-2 mb-3 w-32 text-white text-sm/4 p-1 rounded-sm  cursor-pointer active:scale-95'>  Delete</button>
  </div>
  
})
}






 {/* <div className='h-52 w-32 bg-white rounded-2xl '> </div>
  <div className='h-52 w-32 bg-white rounded-2xl '> </div>
 <div className='h-52 w-32 bg-white rounded-2xl '> </div>
  */}


</div>



</div>




   </div>
  )
}

export default App
