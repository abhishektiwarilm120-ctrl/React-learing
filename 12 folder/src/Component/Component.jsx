import React from 'react'
import {Link} from 'react-router-dom'

const Component = () => {
  return (
    <div>


<div className='nav'>
  <h3>React router</h3>

<div>
<Link to='/'>Home</Link>
<Link to='/about'>About</Link>
<Link to='/contact'>Contact</Link>

  {/* <a href='/'>Home</a>
  <a href='/about'>About</a>
  <a href='/contact'>Contact</a> */}
</div>


</div>

    </div>
  )
}

export default Component