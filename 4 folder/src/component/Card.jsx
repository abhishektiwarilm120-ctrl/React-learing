
import React from 'react'

import { Bookmark } from "lucide-react";
const Card = (props) => {
  return (
    




      
<div className='card'>
<div>

<div className='top'> 
  {/* <img src='https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg' alt=''></img> */}

  <img src={props.brandlogo}alt=''></img>
   <button> Save <Bookmark size={12}/> </button> 
</div>


<div className='center'>
<h3>{props.company} <span>{props.postdate}</span></h3>
<h2>{props.post}</h2>

<div className='tag'>
  <h4>{props.tag1}</h4>
  <h4>{props.tag2}</h4>
</div>

</div>


</div>

<div className='bottom'>
<div>
  <h3>{props.pay}</h3>
    <p>{props.location}</p>
 </div>
  <div>
    
    <button>Apply Now</button>
 
</div>
</div>






</div>



  











  )
}

export default Card