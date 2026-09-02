import React from 'react'

const Card = (props) => {
  return (
    <div>
 
   <a href={props.elem.download_url} target='_blank' rel='noopener noreferrer'>
      
      <div>
 <div className='h-40 w-44 bg-white overflow-hidden rounded-xl ml-5 mt-2'>



      <img className='h-full object-cover ' src={props.elem.download_url} alt=''/>
    </div>
    
 <h2 className= 'text-lg font-bold text-center mt-2'>{props.elem.author}</h2> 
    </div>



  </a>
    </div>
  )
}

export default Card
