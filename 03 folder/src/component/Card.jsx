
import React from 'react'

const Card = (props) => {
   console.log(props.launchYear)
  return (


    <div className='card'>

      <img src={props.img} alt=''></img>
<h1>{props.user},{props.launchYear}</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, pariatur.</p>
<button>View Profile</button>

    </div>
  )
}

export default Card