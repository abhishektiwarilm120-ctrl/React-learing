
import React, { useState } from 'react'

const Button = () => {

const[count,setcount]=useState(1)

function increse(){
  setcount(count+1)
}

function decrese(){
  setcount(count-1)
}


function value(){
  setcount(5)
}


  return (
    <div className='btn'>
<h1>The value Update to press numbers , {count}</h1>
<button className='one'  onClick={increse}  >increse</button>
<button className='two'onClick={decrese}>decrese</button>
<button className='three' onClick={value}>Value 5</button>


    </div>
  )
}

export default Button